import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { indexStyles as styles } from './styles';
import React from 'react';
import { GlogalStyles } from '../../theme/globalStyles';
import { usePokemons } from './hook';
import { ItemList } from './components/itemList';

export const Pokemons = () => {
  const {
    currentPokemons,
    nextPage,
    prevPage,
    isTeamCompleted,
    isSelected,
    onPressPokemon,
    onPressSave,
  } = usePokemons();

  return (
    <View style={styles.container}>
      <Text style={GlogalStyles.title}>Pokemons</Text>
      <FlatList
        data={currentPokemons}
        numColumns={2}
        renderItem={({ item }) => (
          <ItemList
            item={item}
            isSelected={isSelected}
            onPress={onPressPokemon}
          />
        )}
        keyExtractor={item => item.pokemon_species.name}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.btnHeader}
              onPress={onPressSave}
              disabled={!isTeamCompleted}>
              <Text style={styles.textBtnHeader}> Guardar </Text>
            </TouchableOpacity>
          </View>
        }
        ListFooterComponent={
          <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.btnPage} onPress={prevPage}>
              <Text style={styles.textBtnFooter}>{'<'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnPage} onPress={nextPage}>
              <Text style={styles.textBtnFooter}>{'>'}</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};
