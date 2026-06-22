import { StyleSheet } from "react-native";
import { COLORS } from "@/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    marginTop: 40,
  },
  icon: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.gray_600,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.gray_400,
    textAlign: 'center',
    lineHeight: 20,
  },
});