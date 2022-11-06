import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useCallback, useEffect, useState } from 'react';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import { useUserContext } from '../../contexts/user';
import { GoogleSignin } from '../../services/googleService';

interface LoginHook {
  signInWithFacebook: () => Promise<FirebaseAuthTypes.UserCredential>;
  signInWithGoogle: () => Promise<FirebaseAuthTypes.UserCredential>;
}

export const useLoginScreen = (): LoginHook => {
  const { saveUser } = useUserContext();

  const onAuthStateChanged = useCallback(
    (userAuth: any) => {
      if (userAuth) {
        return saveUser({
          id: userAuth.uid,
          email: userAuth.email,
          name: userAuth.displayName,
        });
      }
    },
    [saveUser]
  );

  const signInWithFacebook = async () => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken
    );
    const authUser = await auth().signInWithCredential(facebookCredential);
    return authUser;
  };

  const signInWithGoogle = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [onAuthStateChanged]);

  return {
    signInWithFacebook,
    signInWithGoogle,
  };
};
