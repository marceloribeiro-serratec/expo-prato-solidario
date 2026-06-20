import { StyleSheet } from 'react-native';
import { COLORS } from "@/constants";

export const styles = StyleSheet.create({
  container: { 
    padding: 16, 
    backgroundColor: COLORS.white, 
    borderTopWidth: 1, 
    borderColor: COLORS.gray_200, 
    marginTop: 'auto' 
  },
  socialBadge: { 
    flexDirection: 'row', 
    backgroundColor: COLORS.gray_100,
    padding: 12, 
    borderRadius: 8, 
    marginBottom: 16, 
    alignItems: 'center', 
    borderLeftWidth: 4, 
    borderColor: COLORS.green 
  },
  socialHeart: { 
    fontSize: 24, 
    marginRight: 12 
  },
  socialTextContainer: { 
    flex: 1 
  },
  socialTitle: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: COLORS.green_dark 
  },
  socialDescription: { 
    fontSize: 12, 
    color: COLORS.gray_600, 
    marginTop: 2 
  },
  socialHighlight: { 
    fontWeight: 'bold',
    color: COLORS.green_dark
  },
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginVertical: 6 
  },
  label: { 
    fontSize: 14, 
    color: COLORS.gray_500 
  },
  value: { 
    fontSize: 14, 
    color: COLORS.gray_700, 
    fontWeight: '500' 
  },
  divider: { 
    height: 1, 
    backgroundColor: COLORS.gray_200, 
    marginVertical: 8 
  },
  totalLabel: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: COLORS.gray_700 
  },
  totalValue: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: COLORS.green_dark 
  },
  checkoutButton: { 
    backgroundColor: COLORS.green, 
    paddingVertical: 14, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginTop: 16 
  },
  checkoutButtonText: { 
    color: COLORS.white, 
    fontSize: 16, 
    fontWeight: 'bold' 
  }
});