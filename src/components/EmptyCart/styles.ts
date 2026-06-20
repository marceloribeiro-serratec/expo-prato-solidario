import { StyleSheet } from 'react-native';
import { COLORS } from "@/constants";

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 32, 
    backgroundColor: COLORS.gray_100 
  },
  icon: { 
    fontSize: 64, 
    marginBottom: 16 
  },
  title: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: COLORS.gray_700, 
    marginBottom: 8 
  },
  subtitle: { 
    fontSize: 14, 
    color: COLORS.gray_500, 
    textAlign: 'center', 
    lineHeight: 20 
  }
});