import {
  IRegionListResponse,
  IRegionResponse,
} from './../../interfaces/region';
import { ErrorException } from '../../interfaces/error';
import pokeApi from './index';

export const regionsService = {
  async retrieveAll() {
    try {
      const response = await pokeApi.get('/region');
      return response.data as IRegionListResponse;
    } catch (error: any) {
      return new ErrorException(
        error.code,
        'regions retrieve, error',
        error.message
      );
    }
  },

  async retrieveOneByName(name: string) {
    try {
      const response = await pokeApi.get(`/region/${name}`);
      return response.data as IRegionResponse;
    } catch (error: any) {
      return new ErrorException(
        error.code,
        'regions retrieve one by name, error',
        error.message
      );
    }
  },
};
