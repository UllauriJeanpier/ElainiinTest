import { useTeamContext } from '../../contexts/team';
import { ITeam } from '../../interfaces/team';

interface IHookTeam {
  teams: ITeam[];
  team: ITeam | null;
  updateTeams: (newTeams: ITeam[]) => void;
  updateSelectedTeam: (teamSelected: ITeam | null) => void;
}

export const useTeam = (): IHookTeam => {
  const { teams, team, saveTeams, saveTeam } = useTeamContext();

  /* const getTeamsByRegion =  */

  const updateTeams = (newTeams: ITeam[]) => {
    saveTeams(newTeams);
  };

  const updateSelectedTeam = (teamSelected: ITeam | null) => {
    saveTeam(teamSelected);
  };

  return {
    team,
    teams,
    updateTeams,
    updateSelectedTeam,
  };
};
