import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme/globalTheme';

const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '6%',
    backgroundColor: COLORS.secondary,
  },
  headerContainer: {
    alignItems: 'center',
  },
  btnHeader: {
    paddingVertical: 10,
    marginBottom: 10,
    alignItems: 'center',
    width: '50%',
    backgroundColor: COLORS.morado,
    borderRadius: 10,
  },
  textBtnHeader: {
    fontFamily: FONTS[700],
    fontSize: 15,
    color: COLORS.text.normal,
  },
  footerContainer: {
    paddingVertical: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  btnPage: {
    backgroundColor: COLORS.button.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  textBtnFooter: {
    fontFamily: FONTS[500],
    fontSize: 15,
    color: COLORS.text.normal,
  },
});

const itemStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  text: {
    fontFamily: FONTS[500],
    fontSize: 15,
    color: COLORS.text.normal,
  },
});

export { indexStyles, itemStyles };
