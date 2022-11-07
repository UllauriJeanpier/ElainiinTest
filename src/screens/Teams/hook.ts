import { useNavigation } from '@react-navigation/native';
import { useTeam } from '../../hooks/main/team';
import { ITeam } from '../../interfaces/team';

export const useTeams = () => {
  const navigation = useNavigation();
  const { teams, team, updateSelectedTeam, updateTeams } = useTeam();

  const onPressTeam = (selectedTeam: ITeam) => {
    updateSelectedTeam(selectedTeam);
    navigation.navigate('Pokemons');
  };

  const onPressAddTeam = () => {
    updateSelectedTeam(null);
    navigation.navigate('Pokemons');
  };

  const onPressRemove = (selectedTeam: ITeam) => {
    updateTeams(teams.filter(item => item.token !== selectedTeam.token));
  };

  return {
    teams,
    team,
    onPressTeam,
    onPressAddTeam,
    onPressRemove,
  };
};
