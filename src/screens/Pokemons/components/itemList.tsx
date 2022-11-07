import { Text, TouchableOpacity } from 'react-native';
import { itemStyles as styles } from '../styles';
import { IPokemonItemList } from '../../../interfaces/pokedex';
import { COLORS } from '../../../theme/globalTheme';

interface Props {
  item: IPokemonItemList;
  isSelected: (item: IPokemonItemList) => boolean;
  onPress: (item: IPokemonItemList) => void;
  onPressDetail: (item: IPokemonItemList) => void;
}

export const ItemList = ({
  item,
  isSelected,
  onPress,
  onPressDetail,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: isSelected(item) ? COLORS.verde : COLORS.primary,
        },
      ]}
      onPress={() => onPress(item)}>
      <Text style={styles.text}>{item.pokemon_species.name}</Text>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => onPressDetail(item)}>
        <Text style={styles.btnText}>Ver Detalle</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
