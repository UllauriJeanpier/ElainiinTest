import { useEffect } from 'react';
import { useRegion } from '../../hooks/main/region';

export const useHomeScreen = () => {
  const { regions, retrieveAll } = useRegion();

  useEffect(() => {
    retrieveAll();
  }, [retrieveAll]);

  return {
    regions,
  };
};
