import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Header } from '../../components/header';
import { ModalInput } from '../../components/modal';
import { ItemList } from './components/itemList';
import { useTeams } from './hook';
import { indexStyles as styles } from './styles';

export const Teams = () => {
  const {
    teams,
    token,
    visible,
    setToken,
    onPressAddTeam,
    onPressTeam,
    onPressRemove,
    onPressAddByToken,
    toggleVisible,
  } = useTeams();

  return (
    <View style={styles.container}>
      <Header title={'Equipos'} canGoBack />
      <ModalInput
        visible={visible}
        valueInput={token}
        setValueInput={setToken}
        toggleVisible={toggleVisible}
        onPressOk={onPressAddByToken}
      />
      <FlatList
        data={teams}
        numColumns={2}
        renderItem={({ item, index }) => (
          <ItemList
            item={item}
            index={index}
            onPress={onPressTeam}
            onPressRemove={onPressRemove}
          />
        )}
        keyExtractor={item => item.token}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.footerBtn} onPress={onPressAddTeam}>
              <Text style={styles.textBtn}>Añadir equipo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerBtn} onPress={toggleVisible}>
              <Text style={styles.textBtn}>Añadir por token</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};
