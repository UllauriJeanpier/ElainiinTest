import { View, Text, ActivityIndicator, Image } from 'react-native';
import React from 'react';
import { indexStyles as styles } from './styles';
import { Header } from '../../components/header';
import { usePokemonDetail } from './hook';

export const PokemonDetail = () => {
  const { pokemonDetail } = usePokemonDetail();

  if (!pokemonDetail) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Detalle" canGoBack />
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: pokemonDetail.sprites.other?.home.front_default }}
          style={styles.img}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text>algo</Text>
      </View>
    </View>
  );
};
