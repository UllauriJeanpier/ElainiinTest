import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme/globalTheme';

const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '6%',
    backgroundColor: COLORS.secondary,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
  },
  imgContainer: {
    height: '40%',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  infoContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginVertical: '10%',
    borderRadius: 30,
  },
  infoTitle: {
    fontFamily: FONTS[700],
    fontSize: 15,
    color: COLORS.text.gris,
    marginBottom: 10,
  },
  subcontainer: {
    flexDirection: 'row',
    marginVertical: 5,
    width: '100%',
  },
  infoText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: FONTS[600],
    fontSize: 13,
    color: COLORS.text.negro,
  },
});

export { indexStyles };
