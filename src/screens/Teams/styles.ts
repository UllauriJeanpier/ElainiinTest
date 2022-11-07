import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme/globalTheme';

const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '6%',
    backgroundColor: COLORS.secondary,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  footerContainer: {
    marginVertical: 15,
    alignItems: 'center',
  },
  footerBtn: {
    paddingVertical: 10,
    borderRadius: 10,
    width: '70%',
    alignItems: 'center',
    backgroundColor: COLORS.button.primary,
  },
  textBtn: {
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
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },
  text: {
    fontFamily: FONTS[500],
    fontSize: 15,
    color: COLORS.text.normal,
  },
  btnRemove: {
    position: 'absolute',
    right: -5,
    top: -5,
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 20,
    backgroundColor: COLORS.morado,
  },
  btnRemoveText: {
    fontFamily: FONTS[400],
    fontSize: 12,
    color: COLORS.text.normal,
  },
});

export { indexStyles, itemStyles };
