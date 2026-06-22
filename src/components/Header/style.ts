import { StyleSheet } from 'react-native';

export const header = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 24,
    },
    cartIconContainer: {
        position: 'relative',
        padding: 1
    },
    cartBadge: {
        position: 'absolute',
        top: -1,
        right: 6,
        minWidth: 18,
        height: 15,
        borderRadius: 9,
        paddingHorizontal: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E53935',
    },
    cartBadgeText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '700',
    },
});
    
