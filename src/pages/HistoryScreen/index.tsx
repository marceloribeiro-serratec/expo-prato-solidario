import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, FlatList } from 'react-native';
import { Banknote, ShoppingCart, Percent, Heart, SlidersHorizontal, Search } from 'lucide-react-native';

import { styles } from './style';
import { COLORS } from '@/constants/colors';
import { Header } from '@/components/Header';
import { SummaryCard } from '@/components/SummaryCard';
import { SearchContainer } from '@/components/SearchContainer';
import { SearchBar } from '@/components/SearchBar';
import { OrderCard } from '@/components/OrderCard';

export function HistoryScreen() {
    const [search, setSearch] = useState('');
    const [showToday, setShowToday] = useState(false);
    const [isTodaySelected, setIsTodaySelected] = useState(false);

    // Exemplo de dados (substitua pela sua chamada de API/Estado)
    const orders = [
        { id: '#PS-8422', customer: 'Marcos Lima', date: '19/06/2026', status: 'Entregue', contribution: 'R$ 1,27', total: 'R$ 42,50' },
        { id: '#PS-8423', customer: 'Ana Souza', date: '20/06/2026', status: 'Entregue', contribution: 'R$ 2,10', total: 'R$ 70,00' },
        { id: '#PS-8424', customer: 'Carlos Oliveira', date: '19/06/2026',  status: 'Entregue', contribution: 'R$ 0,85', total: 'R$ 28,50' },
        { id: '#PS-8425', customer: 'Beatriz Costa', date: '20/06/2026', status: 'Entregue', contribution: 'R$ 3,00', total: 'R$ 100,00' },
        { id: '#PS-8426', customer: 'Fernando Alves', date: '18/06/2026', status: 'Entregue', contribution: 'R$ 1,50', total: 'R$ 50,00' },
    ];

    // Formata a data atual para comparar com as strings dos pedidos (DD/MM/YYYY)
    const todayFormatted = new Date().toLocaleDateString('pt-BR');

    const filteredOrders = orders.filter(item => {
        const matchesSearch = item.customer.toLowerCase().includes(search.toLowerCase());
        const matchesDate = !isTodaySelected || item.date === todayFormatted;
        return matchesSearch && matchesDate;
    });

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Header 
                    title="Prato Solidário" 
                    titleColor={COLORS.red}
                    hiddenIcons={['search', 'refresh', 'plus','shoppingCart']}
                    iconColor={COLORS.red}
                    showMenu={true}
                    onPressMenu={() => alert('Menu')} 
                />
            </View>

            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={styles.scrollContainer} 
                style={{ flexGrow: 0 }}
            >
                <SummaryCard type="sold" title="Total Vendido" value="R$ 1.250,00" Icon={Banknote} />
                <SummaryCard type="orders" title="Pedidos Realizados" value="24" Icon={ShoppingCart}/>
                <SummaryCard type="average" title="Ticket Médio" value="R$ 52,00" Icon={Percent}/>
                <SummaryCard type="social" title="Impacto Social" value="R$ 428,21" meta="Meta: 85%" Icon={Heart} />
            </ScrollView>

            <SearchContainer>
                <Search color={COLORS.gray_400} size={20} />
                <SearchBar 
                    placeholder="Buscar por Cliente ou Pedido..." 
                    value={search}
                    onChangeText={setSearch} 
                />
            </SearchContainer>            
            
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

            {/* Lista de Pedidos */}
            <View style={styles.listContainer}>
                <FlatList 
                    data={filteredOrders}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <OrderCard 
                            id={item.id}
                            customer={item.customer}
                            details={item.date}
                            status={item.status}
                            contribution={item.contribution}
                            total={item.total}
                        />
                    )}
                    contentContainerStyle={{ padding: 20, paddingBottom: 40, paddingTop: 6 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}