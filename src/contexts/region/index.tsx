import { createContext, useCallback, useContext, useReducer } from 'react';
import { IRegionItem, IRegionResponse } from '../../interfaces/region';
import { IRegionState, RegionReducer } from './reducer';

type RegionContextType = {
  regions: IRegionItem[];
  region: IRegionResponse | null;
  saveRegions: (regions: IRegionItem[]) => Promise<void>;
  saveRegion: (region: IRegionResponse) => Promise<void>;
};

const RegionInitialState: IRegionState = {
  regions: [],
  region: null,
};

export const RegionContext = createContext({} as RegionContextType);

export const useRegionContext = () => {
  return useContext(RegionContext);
};

export const RegionProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(RegionReducer, RegionInitialState);

  const saveRegions = useCallback(async (regions: IRegionItem[]) => {
    dispatch({
      type: 'saveRegions',
      payload: { regions },
    });
  }, []);

  const saveRegion = useCallback(async (region: IRegionResponse) => {
    dispatch({
      type: 'saveRegion',
      payload: { region },
    });
  }, []);

  return (
    <RegionContext.Provider
      value={{
        ...state,
        saveRegions,
        saveRegion,
      }}>
      {children}
    </RegionContext.Provider>
  );
};
