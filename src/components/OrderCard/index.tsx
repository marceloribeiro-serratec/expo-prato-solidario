import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Heart } from 'lucide-react-native';
import { OrderCardProps } from './type';
import { styles } from './styles';
import { COLORS } from '@/constants';

export function OrderCard({ id, customer, details, status, contribution, total }: OrderCardProps) {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.id}>{id}</Text>
                <View style={styles.statusBadge}>
                    <Text style={styles.statusText}>{status}</Text>
                </View>
            </View>

            <Text style={styles.customer}>{customer}</Text>
            <Text style={styles.details}>{details}</Text>

            <View style={styles.footer}>
                <View style={styles.contributionBox}>
                    <Heart color={COLORS.green_dark} size={24} />
                    <View style={styles.contributionContent}>
                        <Text style={styles.contributionText}>{contribution}</Text>
                        <Text style={styles.contributionValue}>{contribution}</Text>
                    </View>                    
                </View>
                
                <View style={styles.totalBox}>
                    <Text style={styles.totalLabel}>Total Pedido</Text>
                    <Text style={styles.totalValue}>{total}</Text>
                </View>
            </View>
        </View>
    );
}