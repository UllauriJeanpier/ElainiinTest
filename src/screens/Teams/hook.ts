import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useRegion } from '../../hooks/main/region';
import { useTeam } from '../../hooks/main/team';
import { ITeam } from '../../interfaces/team';
import { AlertModal } from '../../utils/function';

export const useTeams = () => {
  const navigation = useNavigation();
  const { region } = useRegion();
  const {
    teams,
    team,
    updateSelectedTeam,
    updateTeams,
    retrieveTeamsByRegion,
    retrieveTeamByToken,
    removeOneTeam,
  } = useTeam();

  const [token, setToken] = useState('');
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible(prev => !prev);

  const onPressTeam = (selectedTeam: ITeam) => {
    updateSelectedTeam(selectedTeam);
    navigation.navigate('Pokemons');
  };

  const onPressAddTeam = () => {
    updateSelectedTeam(null);
    navigation.navigate('Pokemons');
  };

  const onPressRemove = (selectedTeam: ITeam) => {
    removeOneTeam(selectedTeam);
    updateTeams(teams.filter(item => item.token !== selectedTeam.token));
  };

  const onPressAddByToken = async () => {
    const teamFound = await retrieveTeamByToken(token);
    if (teamFound) {
      const alreadyExists = teams.some(item => item.token === teamFound.token);
      if (!alreadyExists) {
        const newTeams = [...teams, teamFound];
        updateTeams(newTeams);
      } else {
        AlertModal('Aviso', 'El equipo ya se existe');
      }
    } else {
      AlertModal('Aviso', 'No se encontro un equipo con este token');
    }
    toggleVisible();
    setToken('');
  };

  useEffect(() => {
    if (region) {
      retrieveTeamsByRegion(region.name);
    }
  }, [region, retrieveTeamsByRegion]);

  return {
    teams,
    team,
    token,
    visible,
    setToken,
    toggleVisible,
    onPressTeam,
    onPressAddTeam,
    onPressRemove,
    onPressAddByToken,
  };
};
