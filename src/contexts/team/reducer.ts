import { ITeam } from '../../interfaces/team';

export interface ITeamState {
  teams: ITeam[];
}

type TeamAction = {
  type: 'saveTeams';
  payload: {
    teams: ITeam[];
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
    default:
      return state;
  }
};
