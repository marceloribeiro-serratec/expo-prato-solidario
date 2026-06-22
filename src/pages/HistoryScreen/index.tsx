import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, ScrollView, TouchableOpacity, Text, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { Banknote, ShoppingCart, Percent, Heart, SlidersHorizontal, Search } from 'lucide-react-native';

import { styles } from './style';
import { COLORS } from '@/constants/colors';
import { Header } from '@/components/Header';
import { SummaryCard } from '@/components/SummaryCard';
import { SearchContainer } from '@/components/SearchContainer';
import { SearchBar } from '@/components/SearchBar';
import { OrderCard } from '@/components/OrderCard';
import { MessageNotFound } from '@/components/MessageNotFound';

import { usePedidos } from '@/hooks/usePedidos'; 
import { calculateSocialContribution } from '@/utils/formatCurrency';
import { formatDate } from '@/utils/formatDate';

export function HistoryScreen() {
    const { pedidos, loading, refresh } = usePedidos();
    const [search, setSearch] = useState('');
    const [showToday, setShowToday] = useState(false);
    const [isTodaySelected, setIsTodaySelected] = useState(false);

    const todayFormatted = new Date().toISOString().split('T')[0];

    useFocusEffect(
        useCallback(() => {
            refresh();
        }, [])
    );

    const ordersCalc = React.useMemo(() => {
        return pedidos.map(pedido => ({
            ...pedido,
            valorImpacto: calculateSocialContribution(pedido.valor_total || 0)
        }));
    }, [pedidos]);

    // Filtra os dados vindos da API
    const filteredOrders = React.useMemo(() => {
        return [...ordersCalc]
            .filter(item => {
                const nomeCliente = item.clientes?.nome || "";
                const matchesSearch = nomeCliente.toLowerCase().includes(search.toLowerCase());
                const matchesDate = !isTodaySelected || item.data === todayFormatted;
                return matchesSearch && matchesDate;
        })
        .sort((a, b) => {
            const idA = a.id ?? 0;
            const idB = b.id ?? 0;
            return idB - idA;
        });    
    }, [ordersCalc, search, isTodaySelected, todayFormatted]);

    const totalVendido = ordersCalc.reduce((acc, curr) => acc + (curr.valor_total || 0), 0);
    const totalPedidos = ordersCalc.length;
    const ticketMedio = totalPedidos > 0 ? (totalVendido / totalPedidos) : 0;
    const totalImpacto = ordersCalc.reduce((acc, curr) => acc + curr.valorImpacto, 0);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.gray_100 }}>
                <ActivityIndicator size="large" color={COLORS.red} />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.headerContainer}>
                    <Header 
                        title="Prato Solidário" 
                        titleColor={COLORS.red}
                        hiddenIcons={['search', 'refresh', 'plus','shoppingCart']}
                        iconColor={COLORS.red}
                        showMenu={true}
                    />
                </View>

                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false} 
                    contentContainerStyle={styles.scrollContainer} 
                    style={{ flexGrow: 0 }}
                >
                    <SummaryCard type="sold" title="Total Vendido" value={`R$ ${totalVendido.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} Icon={Banknote} />
                    <SummaryCard type="orders" title="Pedidos Realizados" value={totalPedidos.toString()} Icon={ShoppingCart}/>
                    <SummaryCard type="average" title="Ticket Médio" value={`R$ ${ticketMedio.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} Icon={Percent}/>
                    <SummaryCard type="social" title="Impacto Social" value={`R$ ${totalImpacto.toFixed(2).replace('.', ',')}`} Icon={Heart} />
                </ScrollView>

                <View style={{ paddingHorizontal: 20 }}>
                    <SearchContainer>
                        <Search color={COLORS.gray_400} size={20} />
                        <SearchBar 
                            placeholder="Buscar por Cliente..." 
                            value={search}
                            onChangeText={setSearch} 
                        />
                    </SearchContainer>
                </View>
                
                <View style={styles.filterRow}>
                    <TouchableOpacity style={styles.filterButton} onPress={() => setShowToday(!showToday)}>
                        <SlidersHorizontal color={COLORS.white} size={16} />
                        <Text style={styles.activeText}>Filtros</Text>
                    </TouchableOpacity>

                    {showToday && (
                        <TouchableOpacity 
                            style={[styles.option, isTodaySelected ? styles.activeOption : null]}
                            onPress={() => setIsTodaySelected(!isTodaySelected)}
                        >
                            <Text style={isTodaySelected ? styles.activeText : styles.text}>Hoje</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            {/* Lista de Pedidos vinda da API */}
            <View style={{ flex: 1, width: '100%' }}>
                <FlatList 
                    data={filteredOrders}
                    keyExtractor={(item) => String(item.id)}

                    refreshControl={
                        <RefreshControl 
                            refreshing={loading} 
                            onRefresh={refresh} 
                            colors={[COLORS.red]} 
                        />
                    }

                    renderItem={({ item }) => (
                        <OrderCard 
                            id={`#PS-${item.id}`}
                            customer={item.clientes?.nome || 'Cliente não informado'}
                            details={formatDate(item.data)}
                            status="Entregue" 
                            contribution={`R$ ${item.valorImpacto.toFixed(2).replace('.', ',')}`}
                            total={`R$ ${item.valor_total.toFixed(2).replace('.', ',')}`}
                        />
                    )}
                    contentContainerStyle={{ padding: 20, paddingBottom: 40, paddingTop: 6 }}
                    ListEmptyComponent={
                        <MessageNotFound                            
                            title="Nenhum pedido localizado"
                            subtitle="Verifique o filtro de busca."
                        />
                    }
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
}