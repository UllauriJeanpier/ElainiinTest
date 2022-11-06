import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { IRegionItem } from '../../../interfaces/region';
import { itemStyles as styles } from '../styles';
import { useHome } from '../hook';

interface Props {
  item: IRegionItem;
}

export const ItemList = ({ item }: Props) => {
  const { onPressRegion } = useHome();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPressRegion(item.name)}>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};
