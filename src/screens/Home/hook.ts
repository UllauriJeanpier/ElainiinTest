import { usePokedex } from './../../hooks/main/pokedex';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useRegion } from '../../hooks/main/region';

export const useHome = () => {
  const navigation = useNavigation();
  const { regions, retrieveAll, retrieveOneByName } = useRegion();
  const { retrieveByRegion } = usePokedex();

  const onPressRegion = async (name: string) => {
    navigation.navigate('Teams');
    const regionSelected = await retrieveOneByName(name);
    if (regionSelected) {
      retrieveByRegion(regionSelected.pokedexes[0].name);
    }
  };

  useEffect(() => {
    retrieveAll();
  }, [retrieveAll]);

  return {
    regions,
    onPressRegion,
  };
};
