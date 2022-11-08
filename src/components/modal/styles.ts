import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme/globalTheme';

const indexStyles = StyleSheet.create({
  containerfondo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000aa',
  },
  subcontainer: {
    backgroundColor: '#ffffff',
    paddingVertical: '15%',
    width: '80%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  title: {
    fontFamily: FONTS[600],
    color: COLORS.text.negro,
    fontSize: 15,
  },
  inputContainer: {
    width: '85%',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 25,
    borderColor: COLORS.secondary,
  },
  inputWidth: {
    width: '90%',
    fontSize: 15,
  },
  errorMsg: {
    margin: 5,
    fontFamily: FONTS[500],
    fontSize: 13,
    color: COLORS.primary,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 10,
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: COLORS.button.primary,
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: '10%',
  },
  textButton: {
    fontFamily: FONTS[500],
    fontSize: 13,
    color: COLORS.text.normal,
  },
});

export { indexStyles };
