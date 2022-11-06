import { useUserContext } from '../contexts/user';
import { AuthStack } from './auth';
import { MainStack } from './main';

export const Navigator = () => {
  const { user } = useUserContext();

  if (user) {
    return <MainStack />;
  }
  return <AuthStack />;
};
