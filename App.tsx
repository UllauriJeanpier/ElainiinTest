import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './src/contexts/user';
import { Navigator } from './src/navigator';
import { GlogalStyles } from './src/theme/globalStyles';
import { RegionProvider } from './src/contexts/region';
import { PokedexProvider } from './src/contexts/pokedex';
import { TeamProvider } from './src/contexts/team';

const ProviderContainer = ({ children }: any) => {
  return (
    <UserProvider>
      <RegionProvider>
        <PokedexProvider>
          <TeamProvider>{children}</TeamProvider>
        </PokedexProvider>
      </RegionProvider>
    </UserProvider>
  );
};

const App = () => {
  return (
    <SafeAreaView style={GlogalStyles.container}>
      <NavigationContainer>
        <ProviderContainer>
          <Navigator />
        </ProviderContainer>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
