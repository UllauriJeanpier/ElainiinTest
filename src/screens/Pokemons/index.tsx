import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { indexStyles as styles } from './styles';
import { usePokemons } from './hook';
import { ItemList } from './components/itemList';
import { Header } from '../../components/header';

export const Pokemons = () => {
  const {
    currentPokemons,
    team,
    nextPage,
    prevPage,
    isTeamCompleted,
    isSelected,
    onPressPokemon,
    onPressSave,
    onPressDetail,
  } = usePokemons();

  return (
    <View style={styles.container}>
      <Header title="Pokemons" canGoBack />
      <FlatList
        data={currentPokemons}
        numColumns={2}
        renderItem={({ item }) => (
          <ItemList
            item={item}
            isSelected={isSelected}
            onPress={onPressPokemon}
            onPressDetail={onPressDetail}
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
              <Text style={styles.textBtnHeader}>
                {' '}
                {team ? 'Actualizar Equipo' : 'Agregar Equipo'}{' '}
              </Text>
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
