import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme/globalTheme';

const indexStyles = StyleSheet.create({
  container: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS[800],
    fontSize: 20,
    color: COLORS.text.gris,
  },
  btnGoback: {
    padding: 10,
    borderRadius: 30,
  },
  textBtn: {
    fontFamily: FONTS[900],
    fontSize: 20,
    color: COLORS.text.normal,
  },
});

export { indexStyles };
