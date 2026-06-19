import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';
import { LucideIcon } from 'lucide-react-native';

interface SummaryCardProps {
    title: string;
    value: string;
    type?: 'sold' | 'orders' | 'average' | 'social';
    meta?: string;
    Icon?: LucideIcon;
}

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

const styles = StyleSheet.create({
    card: {
        width: 240,
        height: 148,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 3,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    accent: {
        width: 8,
        height: '100%',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    content: {
        flex: 1,
        paddingLeft: 12,
        paddingRight: 16,
        justifyContent: 'center',
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    infoRow: {
        marginBottom: 2,
    },
    title: {
        fontSize: 16,
        fontWeight: '400',
        color: COLORS.info_medium,
    },
    meta: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.info_medium,
    },
    value: {
        fontSize: 24,
        fontWeight: '600',
    }
});