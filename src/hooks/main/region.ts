import { useCallback, useState } from 'react';
import { useRegionContext } from '../../contexts/region';
import { ErrorException, IError } from '../../interfaces/error';
import { IRegionItem, IRegionResponse } from '../../interfaces/region';
import { regionsService } from '../../services/api/regions';

interface IHookRegion {
  region: IRegionResponse | null;
  regions: IRegionItem[];
  isLoading: boolean;
  error: IError | null;
  retrieveAll: () => Promise<void>;
  retrieveOneByName: (name: string) => Promise<void>;
}

export const useRegion = (): IHookRegion => {
  const { region, regions, saveRegions, saveRegion } = useRegionContext();
  const [error, setError] = useState<IError | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const retrieveAll = useCallback(async () => {
    setIsLoading(true);
    try {
      const regionsResponse = await regionsService.retrieveAll();
      if (regionsResponse instanceof ErrorException) {
        throw regionsResponse;
      }
      saveRegions(regionsResponse.results);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [saveRegions]);

  const retrieveOneByName = useCallback(
    async (name: string) => {
      setIsLoading(true);
      try {
        const regionResponse = await regionsService.retrieveOneByName(name);
        if (regionResponse instanceof ErrorException) {
          throw regionResponse;
        }
        saveRegion(regionResponse);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    },
    [saveRegion]
  );

  return {
    region,
    regions,
    isLoading,
    error,
    retrieveAll,
    retrieveOneByName,
  };
};
