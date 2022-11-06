import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { CONFIG } from '../utils/config';

GoogleSignin.configure({
  webClientId: CONFIG.GOOGLE.client_id,
});

export { GoogleSignin };
