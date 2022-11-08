import { Alert } from 'react-native';

export const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(10);
};

export const AlertModal = (title: string, message: string) => {
  Alert.alert(title, message, [
    {
      text: 'Aceptar',
      style: 'cancel',
    },
  ]);
};
