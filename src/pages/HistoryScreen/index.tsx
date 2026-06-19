import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { styles } from './style';
import { Header } from '@/components/Header';
import { COLORS } from '@/constants/colors';
import { SummaryCard } from '@/components/SummaryCard';
import { Banknote, ShoppingCart, Percent, Heart } from 'lucide-react-native';

export function HistoryScreen() {
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
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                <SummaryCard type="sold" title="Total Vendido" value="R$ 1.250,00" Icon={Banknote} />
                <SummaryCard type="orders" title="Pedidos Realizados" value="24" Icon={ShoppingCart}/>
                <SummaryCard type="average" title="Ticket Médio" value="R$ 52,00" Icon={Percent}/>
                <SummaryCard type="social" title="Impacto Social" value="R$ 428,21" meta="Meta: 85%" Icon={Heart} />
            </ScrollView>
        </View>
    );
}