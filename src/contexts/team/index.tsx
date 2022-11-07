import { createContext, useCallback, useContext, useReducer } from 'react';
import { ITeam } from '../../interfaces/team';
import { ITeamState, TeamReducer } from './reducer';

type TeamContextType = {
  team: ITeam | null;
  teams: ITeam[];
  saveTeams: (teams: ITeam[]) => Promise<void>;
  saveTeam: (team: ITeam | null) => Promise<void>;
};

const TeamInitialState: ITeamState = {
  team: null,
  teams: [],
};

export const TeamContext = createContext({} as TeamContextType);

export const useTeamContext = () => {
  return useContext(TeamContext);
};

export const TeamProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(TeamReducer, TeamInitialState);

  const saveTeam = useCallback(async (team: ITeam | null) => {
    dispatch({
      type: 'saveTeam',
      payload: { team },
    });
  }, []);

  const saveTeams = useCallback(async (teams: ITeam[]) => {
    dispatch({
      type: 'saveTeams',
      payload: { teams },
    });
  }, []);

  return (
    <TeamContext.Provider
      value={{
        ...state,
        saveTeams,
        saveTeam,
      }}>
      {children}
    </TeamContext.Provider>
  );
};
