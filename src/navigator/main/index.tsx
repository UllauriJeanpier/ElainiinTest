import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from '../../theme/globalTheme';
import { Home } from '../../screens/Home';
import { Teams } from '../../screens/Teams';
import { Pokemons } from '../../screens/Pokemons';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: COLORS.secondary,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Teams"
        component={Teams}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Pokemons"
        component={Pokemons}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
