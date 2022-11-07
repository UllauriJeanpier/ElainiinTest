import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/globalTheme';

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
    flex: 1,
  },
});

export { indexStyles };
