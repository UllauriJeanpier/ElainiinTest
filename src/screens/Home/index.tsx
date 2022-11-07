import { View, FlatList } from 'react-native';
import React from 'react';
import { useHome } from './hook';
import { indexStyles as styles } from './styles';
import { ItemList } from './components/itemList';
import { Header } from '../../components/header';

export const Home = () => {
  const { regions } = useHome();

  return (
    <View style={styles.container}>
      <Header title="Regiones" />
      <FlatList
        data={regions}
        renderItem={({ item }) => <ItemList item={item} />}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
