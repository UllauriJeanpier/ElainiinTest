import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useLoginScreen } from './hook';
import { styles } from './styles';

export const Login = () => {
  const { signInWithFacebook, signInWithGoogle } = useLoginScreen();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>INICIAR SESION</Text>
      <TouchableOpacity style={styles.faceButton} onPress={signInWithFacebook}>
        <Text style={styles.text}>Ingresar con Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton} onPress={signInWithGoogle}>
        <Text style={styles.text}>Ingresar con Google</Text>
      </TouchableOpacity>
    </View>
  );
};
