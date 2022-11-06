import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme/globalTheme';

const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '6%',
    backgroundColor: COLORS.secondary,
  },
  title: {
    fontFamily: FONTS[800],
    fontSize: 20,
    marginTop: 30,
    marginBottom: 20,
    color: COLORS.text.gris,
  },
});

const itemStyles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },
  text: {
    fontFamily: FONTS[500],
    fontSize: 15,
    color: COLORS.text.normal,
  },
});

export { indexStyles, itemStyles };
