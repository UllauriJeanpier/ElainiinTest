import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { GlogalStyles } from '../../theme/globalStyles';
import { ItemList } from './components/itemList';
import { useTeams } from './hook';
import { indexStyles as styles } from './styles';

export const Teams = () => {
  const { teams, onPressAddTeam } = useTeams();

  return (
    <View style={styles.container}>
      <Text style={GlogalStyles.title}>Equipos</Text>

      <FlatList
        data={teams}
        numColumns={2}
        renderItem={({ item }) => <ItemList item={item} />}
        keyExtractor={item => item.token}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.footerBtn} onPress={onPressAddTeam}>
              <Text style={styles.textBtn}>Añadir equipo</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};
