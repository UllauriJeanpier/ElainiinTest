import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme/globalTheme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: FONTS[400],
    lineHeight: 15,
    color: 'white',
  },
  faceButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: COLORS.secondary,
  },
  googleButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },
});
