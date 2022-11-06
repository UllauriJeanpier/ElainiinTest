import { useNavigation } from '@react-navigation/native';
import { usePokedex } from '../../hooks/main/pokedex';
import { useTeam } from '../../hooks/main/team';
import { ITeam } from '../../interfaces/team';

export const useTeams = () => {
  const navigation = useNavigation();
  const { teams } = useTeam();
  const { savePokemonsSelected } = usePokedex();

  const onPressTeam = (team: ITeam) => {
    savePokemonsSelected(team.pokemons);
  };

  const onPressAddTeam = () => {
    navigation.navigate('Pokemons');
  };

  return {
    teams,
    onPressTeam,
    onPressAddTeam,
  };
};
