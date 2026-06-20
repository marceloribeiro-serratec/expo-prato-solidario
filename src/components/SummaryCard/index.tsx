import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';
import { styles } from './styles';
import { SummaryCardProps } from './type';

export function SummaryCard({ title, value, type = 'sold', meta, Icon }: SummaryCardProps) {
    
    const config = {
        sold:    { border: COLORS.red, text: COLORS.gray_700, bg: COLORS.white },
        orders:  { border: COLORS.green, text: COLORS.gray_700, bg: COLORS.white },
        average: { border: COLORS.yellow, text: COLORS.gray_700, bg: COLORS.white },
        social:  { border: COLORS.green_dark, text: COLORS.gray_700, bg: COLORS.green_light }
    };

    const current = config[type];

    return (
        <View style={[styles.card, { backgroundColor: current.bg }]}>
            {type !== 'social' && (
                <View style={[styles.accent, { backgroundColor: current.border }]} />
            )}
            
            <View style={[styles.content, type === 'social' && { paddingLeft: 20 }]}>
                {/* TOPO: Ícone e Meta */}
                <View style={styles.topRow}>
                    {Icon && <Icon color={current.border} size={24} />}
                    {meta && <Text style={styles.meta}>{meta}</Text>}
                </View>

                {/* MEIO: Título e Linha de destaque */}
                <View style={styles.infoRow}>
                    <Text style={styles.title}>{title}</Text>                    
                </View>
                
                {/* VALOR */}
                <Text style={[styles.value, { color: current.text }]}>{value}</Text>

            </View>
        </View>
    );
}