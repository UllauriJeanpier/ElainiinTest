import database from '@react-native-firebase/database';
import { ErrorException } from '../../interfaces/error';
import { ITeam } from '../../interfaces/team';

const databaseService = {
  teams: {
    async retrieve(region: string, user_id: string) {
      try {
        const snapshot = await database()
          .ref(`/teams/${region}/${user_id}`)
          .once('value');
        const data: ITeam[] | null = snapshot.val();
        return data ? data : [];
      } catch (error: any) {
        return new ErrorException(
          error.code,
          'teams retrieve by region, error',
          error.message
        );
      }
    },

    async save(region: string, user_id: string, teams: ITeam[]) {
      try {
        await database().ref(`/teams/${region}/${user_id}`).set(teams);
      } catch (error: any) {
        return new ErrorException(
          error.code,
          'teams update, error',
          error.message
        );
      }
    },
  },

  teamByToken: {
    async retrieve(token: string) {
      try {
        const snapshot = await database()
          .ref(`/teamByToken/${token}`)
          .once('value');
        const data: ITeam | null = snapshot.val();
        return data;
      } catch (error: any) {
        return new ErrorException(
          error.code,
          'team update, error',
          error.message
        );
      }
    },
    async save(token: string, team: ITeam) {
      try {
        await database().ref(`/teamByToken/${token}`).set(team);
      } catch (error: any) {
        return new ErrorException(
          error.code,
          'team save, error',
          error.message
        );
      }
    },
    async remove(token: string) {
      try {
        await database().ref(`/teamByToken/${token}`).remove();
      } catch (error: any) {
        return new ErrorException(
          error.code,
          'team remove, error',
          error.message
        );
      }
    },
  },
};

export { databaseService };
