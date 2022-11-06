import { IRegionItem, IRegionResponse } from '../../interfaces/region';

export interface IRegionState {
  region: IRegionResponse | null;
  regions: IRegionItem[];
}

type RegionAction =
  | {
      type: 'saveRegions';
      payload: {
        regions: IRegionItem[];
      };
    }
  | {
      type: 'saveRegion';
      payload: {
        region: IRegionResponse | null;
      };
    };

export const RegionReducer = (
  state: IRegionState,
  action: RegionAction
): IRegionState => {
  switch (action.type) {
    case 'saveRegions':
      return {
        ...state,
        regions: action.payload.regions,
      };
    case 'saveRegion':
      return {
        ...state,
        region: action.payload.region,
      };
    default:
      return state;
  }
};
