import { ITeam } from '../../interfaces/team';

export interface ITeamState {
  team: ITeam | null;
  teams: ITeam[];
}

type TeamAction =
  | {
      type: 'saveTeams';
      payload: {
        teams: ITeam[];
      };
    }
  | {
      type: 'saveTeam';
      payload: {
        team: ITeam | null;
      };
    };

export const TeamReducer = (
  state: ITeamState,
  action: TeamAction
): ITeamState => {
  switch (action.type) {
    case 'saveTeams':
      return {
        ...state,
        teams: action.payload.teams,
      };
    case 'saveTeam':
      return {
        ...state,
        team: action.payload.team,
      };
    default:
      return state;
  }
};
