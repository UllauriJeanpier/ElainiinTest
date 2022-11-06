import { useTeamContext } from '../../contexts/team';
import { ITeam } from '../../interfaces/team';

interface IHookTeam {
  teams: ITeam[];
  updateTeams: (newTeams: ITeam[]) => void;
}

export const useTeam = (): IHookTeam => {
  const { teams, saveTeams } = useTeamContext();

  /* const getTeamsByRegion =  */

  const updateTeams = (newTeams: ITeam[]) => {
    saveTeams(newTeams);
  };

  return {
    teams,
    updateTeams,
  };
};
