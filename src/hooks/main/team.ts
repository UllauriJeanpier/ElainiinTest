import { useCallback, useState } from 'react';
import { useTeamContext } from '../../contexts/team';
import { useUserContext } from '../../contexts/user';
import { ErrorException, IError } from '../../interfaces/error';
import { ITeam } from '../../interfaces/team';
import { databaseService } from '../../services/database';
import { useRegion } from './region';

interface IHookTeam {
  teams: ITeam[];
  team: ITeam | null;
  error: IError | null;
  isLoading: boolean;
  updateTeams: (newTeams: ITeam[]) => void;
  updateSelectedTeam: (teamSelected: ITeam | null) => void;
  retrieveTeamsByRegion: (region: string) => Promise<void>;
  retrieveTeamByToken: (token: string) => Promise<ITeam | null>;
  removeOneTeam: (selectedTeam: ITeam) => void;
}

export const useTeam = (): IHookTeam => {
  const { teams, team, saveTeams, saveTeam } = useTeamContext();
  const { region } = useRegion();
  const [error, setError] = useState<IError | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUserContext();

  const updateTeams = (newTeams: ITeam[]) => {
    saveTeams(newTeams);
    databaseService.teams.save(region!.name, user!.id, newTeams);
  };

  const updateSelectedTeam = (teamSelected: ITeam | null) => {
    saveTeam(teamSelected);
  };

  const removeOneTeam = (selectedTeam: ITeam) => {
    // save it for copy by token
    databaseService.teamByToken.remove(selectedTeam.token);
    // -------------------------
  };

  const retrieveTeamsByRegion = useCallback(
    async (name: string) => {
      setIsLoading(true);
      try {
        const teamsResponse = await databaseService.teams.retrieve(
          name,
          user!.id
        );
        if (teamsResponse instanceof ErrorException) {
          throw teamsResponse;
        }
        saveTeams(teamsResponse);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    },
    [saveTeams, user]
  );

  const retrieveTeamByToken = useCallback(async (token: string) => {
    setIsLoading(true);
    try {
      const response = await databaseService.teamByToken.retrieve(token);
      if (response instanceof ErrorException) {
        throw response;
      }
      return response;
    } catch (err: any) {
      setError(err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    team,
    teams,
    isLoading,
    error,
    updateTeams,
    updateSelectedTeam,
    retrieveTeamsByRegion,
    retrieveTeamByToken,
    removeOneTeam,
  };
};
