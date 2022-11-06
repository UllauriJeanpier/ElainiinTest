import { IUser } from '../../interfaces/user';

export interface IUserState {
  user: IUser | null;
}

type UserAction = {
  type: 'saveUser';
  payload: {
    user: IUser | null;
  };
};

export const UserReducer = (
  state: IUserState,
  action: UserAction
): IUserState => {
  switch (action.type) {
    case 'saveUser':
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};
