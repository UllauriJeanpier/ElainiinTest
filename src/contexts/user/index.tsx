import { createContext, useCallback, useContext, useReducer } from 'react';
import { IUser } from '../../interfaces/user';
import { IUserState, UserReducer } from './reducer';

type UserContextType = {
  user: IUser | null;
  saveUser: (user: IUser) => void;
};

const UserInitialState: IUserState = {
  user: null,
};

export const UserContext = createContext({} as UserContextType);

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(UserReducer, UserInitialState);

  const saveUser = useCallback(async (user: IUser) => {
    dispatch({
      type: 'saveUser',
      payload: { user },
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        ...state,
        saveUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};
