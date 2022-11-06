import { IPokedexResponse } from './../../interfaces/pokedex';
import pokeApi from '.';
import { ErrorException } from '../../interfaces/error';
import { IPokemonResponse } from '../../interfaces/pokemon';

export const pokedexService = {
  async retrievePokemonsByRegion(region: string) {
    try {
      const response = await pokeApi.get(`/pokedex/${region}`);
      return response.data as IPokedexResponse;
    } catch (error: any) {
      return new ErrorException(
        error.code,
        'pokedex retrieve by region, error',
        error.message
      );
    }
  },

  async retrievePokemonDetailByName(name: string) {
    try {
      const response = await pokeApi.get(`/pokemon/${name}`);
      return response.data as IPokemonResponse;
    } catch (error: any) {
      return new ErrorException(
        error.code,
        'pokedex retrieve detail by name, error',
        error.message
      );
    }
  },
};
