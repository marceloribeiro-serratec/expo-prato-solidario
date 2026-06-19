import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, // Lembre-se de ajustar para a propriedade de fundo do seu colors.ts
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