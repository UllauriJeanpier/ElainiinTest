import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { itemStyles as styles } from '../styles';
import { ITeam } from '../../../interfaces/team';

interface Props {
  item: ITeam;
  index: number;
  onPress: (selectedTeam: ITeam) => void;
  onPressRemove: (selectedTeam: ITeam) => void;
}

export const ItemList = ({ item, index, onPress, onPressRemove }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <TouchableOpacity
        style={styles.btnRemove}
        onPress={() => onPressRemove(item)}>
        <Text style={styles.btnRemoveText}>X</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Equipo {index + 1}</Text>
      <View style={styles.tokenContainer}>
        <Text style={styles.textToken}>Token: </Text>
        <Text style={styles.textToken}>{item.token}</Text>
      </View>
    </TouchableOpacity>
  );
};
