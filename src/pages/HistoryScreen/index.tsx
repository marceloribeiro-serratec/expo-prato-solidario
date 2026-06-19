import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { styles } from './style';
import { Header } from '@/components/Header';
import { COLORS } from '@/constants/colors';
import { SummaryCard } from '@/components/SummaryCard';
import { Banknote, ShoppingCart, Percent, Heart } from 'lucide-react-native';
import { Search } from 'lucide-react-native';
import { SearchContainer } from '@/components/SearchContainer';
import { SearchBar } from '@/components/SearchBar';
import { useState } from 'react';

export function HistoryScreen() {

    const [search, setSearch] = useState('');

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
        </View>
    );
}