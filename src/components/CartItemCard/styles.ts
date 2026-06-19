import { StyleSheet } from 'react-native';
import { COLORS } from "@/constants";

export const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    padding: 16, 
    backgroundColor: COLORS.white, 
    marginBottom: 8, 
    borderRadius: 8, 
    shadowColor: COLORS.black, 
    shadowOffset: { width: 0, height: 1 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 1.41, 
    elevation: 2 
  },
  image: { 
    width: 80, 
    height: 80, 
    borderRadius: 8, 
    marginRight: 12 
  },
  content: { 
    flex: 1, 
    justifyContent: 'space-between' 
  },
  headerRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  name: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: COLORS.gray_700
  },
  removeButton: { 
    padding: 4 
  },
  removeText: { 
    color: COLORS.gray_400, 
    fontSize: 16 
  },
  price: { 
    fontSize: 14, 
    color: COLORS.gray_500, 
    marginTop: 4 
  },
  actionsRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 8 
  },
  quantitySelector: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: COLORS.gray_200, 
    borderRadius: 4 
  },
  qtyButton: { 
    paddingHorizontal: 12, 
    paddingVertical: 6 
  },
  qtyButtonText: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: COLORS.gray_700 
  },
  quantity: { 
    paddingHorizontal: 8, 
    fontSize: 14, 
    fontWeight: '600',
    color: COLORS.gray_800
  },
  itemTotal: { 
    fontSize: 15, 
    fontWeight: 'bold', 
    color: COLORS.green_dark 
  }
});