import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { styles } from './style';
import { Header } from '@/components/Header';
import { COLORS } from '@/constants/colors';

export function HistoryScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Header 
                    title="Prato Solidário" 
                    titleColor={COLORS.red}
                    hiddenIcons={['search', 'refresh', 'plus']}
                    iconColor={COLORS.red}
                    showMenu={true}
                    onPressMenu={() => alert('Menu')} 
                />
            </View>

        </View>
    );
}