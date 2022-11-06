import { View, FlatList, Text } from 'react-native';
import React from 'react';
import { useHome } from './hook';
import { indexStyles as styles } from './styles';
import { ItemList } from './components/itemList';
import { GlogalStyles } from '../../theme/globalStyles';

export const Home = () => {
  const { regions } = useHome();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Regiones</Text>
      <FlatList
        data={regions}
        renderItem={({ item }) => <ItemList item={item} />}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
