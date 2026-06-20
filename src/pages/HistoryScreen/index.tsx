import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { styles } from './style';
import { Header } from '@/components/Header';
import { COLORS } from '@/constants/colors';
import { SummaryCard } from '@/components/SummaryCard';
import { Banknote, ShoppingCart, Percent, Heart, SlidersHorizontal } from 'lucide-react-native';
import { Search } from 'lucide-react-native';
import { SearchContainer } from '@/components/SearchContainer';
import { SearchBar } from '@/components/SearchBar';
import { useState } from 'react';

export function HistoryScreen() {

    const [search, setSearch] = useState('');
    const [showToday, setShowToday] = useState(false);
    const [isTodaySelected, setIsTodaySelected] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Header 
                    title="Prato Solidário" 
                    titleColor={COLORS.red}
                    hiddenIcons={['search', 'refresh', 'plus','shoppingCart']}
                    iconColor={COLORS.red}
                    showMenu={true}
                />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer} style={{ flexGrow: 0 }}>
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
                <TouchableOpacity 
                    style={styles.filterButton} 
                    onPress={() => setShowToday(!showToday)}
                >
                    <SlidersHorizontal color={COLORS.white} size={16} />
                    <Text style={styles.activeText}>Filtros</Text>
                </TouchableOpacity>

                {showToday && (
                    <TouchableOpacity 
                        style={[
                            styles.option, 
                            isTodaySelected ? styles.activeOption : null
                        ]}
                        onPress={() => setIsTodaySelected(!isTodaySelected)}
                    >
                        <Text style={isTodaySelected ? styles.activeText : styles.text}>Hoje</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}
