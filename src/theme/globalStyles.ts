import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from './globalTheme';

export const GlogalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: FONTS[800],
    fontSize: 20,
    marginTop: 30,
    marginBottom: 20,
    color: COLORS.text.gris,
  },
});
