import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { IRegionItem } from '../../../interfaces/region';
import { itemStyles as styles } from '../styles';

interface Props {
  item: IRegionItem;
}

export const ItemList = ({ item }: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};
