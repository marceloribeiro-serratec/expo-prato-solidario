import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray_100,
  },
  listContent: {
    padding: 16,
    flexGrow: 1,
  },
  footer: {
    marginTop: 20,
    justifyContent: 'flex-end',
  },
});
