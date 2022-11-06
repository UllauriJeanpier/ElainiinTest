import { createContext, useCallback, useContext, useReducer } from 'react';
import { ITeam } from '../../interfaces/team';
import { ITeamState, TeamReducer } from './reducer';

type TeamContextType = {
  teams: ITeam[];
  saveTeams: (teams: ITeam[]) => Promise<void>;
};

const TeamInitialState: ITeamState = {
  teams: [],
};

export const TeamContext = createContext({} as TeamContextType);

export const useTeamContext = () => {
  return useContext(TeamContext);
};

export const TeamProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(TeamReducer, TeamInitialState);

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
      }}>
      {children}
    </TeamContext.Provider>
  );
};
