import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { itemStyles as styles } from '../styles';
import { useTeams } from '../hook';
import { ITeam } from '../../../interfaces/team';

interface Props {
  item: ITeam;
}

export const ItemList = ({ item }: Props) => {
  const { onPressTeam } = useTeams();

  return (
    <TouchableOpacity style={styles.container} onPress={onPressTeam}>
      <Text style={styles.text}>{item.token}</Text>
    </TouchableOpacity>
  );
};
