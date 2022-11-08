import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme/globalTheme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.blanco,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS[700],
    color: COLORS.text.negro,
    paddingVertical: 30,
  },
  text: {
    fontSize: 14,
    fontFamily: FONTS[400],
    lineHeight: 15,
    color: COLORS.text.normal,
  },
  faceButton: {
    paddingVertical: 15,
    borderRadius: 5,
    width: '60%',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    marginVertical: 10,
  },
  googleButton: {
    paddingVertical: 15,
    borderRadius: 5,
    width: '60%',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    marginVertical: 10,
  },
});
