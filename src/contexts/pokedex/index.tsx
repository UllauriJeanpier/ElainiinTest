import { createContext, useCallback, useContext, useReducer } from 'react';
import { IPokemonItemList } from '../../interfaces/pokedex';
import { IPokemonResponse } from '../../interfaces/pokemon';
import { IPokedexState, PokedexReducer } from './reducer';

type PokedexContextType = {
  pokemons: IPokemonItemList[];
  pokemonsSelected: IPokemonItemList[];
  pokemonDetail: IPokemonResponse | null;
  savePokemons: (pokemons: IPokemonItemList[]) => Promise<void>;
  savePokemonsSelected: (pokemonsSelected: IPokemonItemList[]) => Promise<void>;
  savePokemonDetail: (pokemonDetail: IPokemonResponse) => Promise<void>;
};

const PokedexInitialState: IPokedexState = {
  pokemons: [],
  pokemonsSelected: [],
  pokemonDetail: null,
};

export const PokedexContext = createContext({} as PokedexContextType);

export const usePokedexContext = () => {
  return useContext(PokedexContext);
};

export const PokedexProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(PokedexReducer, PokedexInitialState);

  const savePokemons = useCallback(async (pokemons: IPokemonItemList[]) => {
    dispatch({
      type: 'savePokedex',
      payload: { pokemons },
    });
  }, []);

  const savePokemonsSelected = useCallback(
    async (pokemonsSelected: IPokemonItemList[]) => {
      dispatch({
        type: 'savePokemonsSelected',
        payload: { pokemonsSelected },
      });
    },
    []
  );

  const savePokemonDetail = useCallback(
    async (pokemonDetail: IPokemonResponse) => {
      dispatch({
        type: 'savePokemonDetail',
        payload: { pokemonDetail },
      });
    },
    []
  );

  return (
    <PokedexContext.Provider
      value={{
        ...state,
        savePokemons,
        savePokemonsSelected,
        savePokemonDetail,
      }}>
      {children}
    </PokedexContext.Provider>
  );
};
