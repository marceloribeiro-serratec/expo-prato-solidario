import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants';

export const styles = StyleSheet.create({
    container: { 
      flexDirection: 'row', 
      paddingHorizontal: 16, 
      marginTop: 8, 
      gap: 8,
      alignSelf: 'flex-start', 
    },
    option: { 
        paddingHorizontal: 20, 
        paddingVertical: 8, 
        borderRadius: 20, 
        borderWidth: 1, 
        borderColor: COLORS.gray_300 
    },
    activeOption: { 
      backgroundColor: COLORS.red, 
      borderColor: COLORS.red },
    text: { 
      color: COLORS.gray_600, 
      fontSize: 14 
    },
    activeText: { 
      color: COLORS.white, 
      fontWeight: 'bold' 
    }
});