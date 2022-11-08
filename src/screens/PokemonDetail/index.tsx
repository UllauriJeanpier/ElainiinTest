import { View, Text, ActivityIndicator, Image } from 'react-native';
import React from 'react';
import { indexStyles as styles } from './styles';
import { Header } from '../../components/header';
import { usePokemonDetail } from './hook';
import { COLORS } from '../../theme/globalTheme';

export const PokemonDetail = () => {
  const { pokemonDetail } = usePokemonDetail();

  if (!pokemonDetail) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
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
        <Text style={styles.infoTitle}>Descripcion</Text>
        <View style={styles.subcontainer}>
          <Text style={styles.infoText}>Nombre: </Text>
          <Text style={styles.infoText}>{pokemonDetail.name}</Text>
        </View>
        <View style={styles.subcontainer}>
          <Text style={styles.infoText}>Tipo: </Text>
          <Text style={styles.infoText}>
            {pokemonDetail.types[0].type.name}
          </Text>
        </View>
        <View style={styles.subcontainer}>
          <Text style={styles.infoText}>Experiencia base: </Text>
          <Text style={styles.infoText}>{pokemonDetail.base_experience}</Text>
        </View>
        <View style={styles.subcontainer}>
          <Text style={styles.infoText}>Altura: </Text>
          <Text style={styles.infoText}>{pokemonDetail.height}</Text>
        </View>
        <View style={styles.subcontainer}>
          <Text style={styles.infoText}>Peso: </Text>
          <Text style={styles.infoText}>{pokemonDetail.weight}</Text>
        </View>
      </View>
    </View>
  );
};
