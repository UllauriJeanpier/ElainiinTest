import { pokedexService } from './../../services/api/pokedex';
import { useCallback, useState } from 'react';
import { ErrorException, IError } from '../../interfaces/error';
import { usePokedexContext } from '../../contexts/pokedex';
import { IPokemonItemList } from '../../interfaces/pokedex';
import { IPokemonResponse } from '../../interfaces/pokemon';

interface IHookPokedex {
  pokemons: IPokemonItemList[];
  pokemonsSelected: IPokemonItemList[];
  pokemonDetail: IPokemonResponse | null;
  isLoading: boolean;
  error: IError | null;
  retrieveByRegion: (region: string) => Promise<void>;
  retrieveDetailByName: (name: string) => Promise<void>;
  savePokemonsSelected: (pokemonsSelected: IPokemonItemList[]) => Promise<void>;
}

export const usePokedex = (): IHookPokedex => {
  const {
    pokemonDetail,
    pokemons,
    pokemonsSelected,
    savePokemonsSelected,
    savePokemonDetail,
    savePokemons,
  } = usePokedexContext();

  const [error, setError] = useState<IError | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const retrieveByRegion = useCallback(
    async (region: string) => {
      setIsLoading(true);
      try {
        const pokedexResponse = await pokedexService.retrievePokemonsByRegion(
          region
        );
        if (pokedexResponse instanceof ErrorException) {
          throw pokedexResponse;
        }
        savePokemons(pokedexResponse.pokemon_entries);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    },
    [savePokemons]
  );

  const retrieveDetailByName = useCallback(
    async (name: string) => {
      setIsLoading(true);
      try {
        const pokemonDetailResponse =
          await pokedexService.retrievePokemonDetailByName(name);
        if (pokemonDetailResponse instanceof ErrorException) {
          throw pokemonDetailResponse;
        }
        savePokemonDetail(pokemonDetailResponse);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    },
    [savePokemonDetail]
  );

  return {
    pokemons,
    pokemonsSelected,
    pokemonDetail,
    isLoading,
    error,
    retrieveByRegion,
    retrieveDetailByName,
    savePokemonsSelected,
  };
};
