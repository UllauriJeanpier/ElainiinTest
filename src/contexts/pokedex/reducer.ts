import { IPokemonItemList } from '../../interfaces/pokedex';
import { IPokemonResponse } from '../../interfaces/pokemon';

export interface IPokedexState {
  pokemons: IPokemonItemList[];
  pokemonDetail: IPokemonResponse | null;
}

type PokedexAction =
  | {
      type: 'savePokedex';
      payload: {
        pokemons: IPokemonItemList[];
      };
    }
  | {
      type: 'savePokemonDetail';
      payload: {
        pokemonDetail: IPokemonResponse | null;
      };
    };

export const PokedexReducer = (
  state: IPokedexState,
  action: PokedexAction
): IPokedexState => {
  switch (action.type) {
    case 'savePokedex':
      return {
        ...state,
        pokemons: action.payload.pokemons,
      };
    case 'savePokemonDetail':
      return {
        ...state,
        pokemonDetail: action.payload.pokemonDetail,
      };
    default:
      return state;
  }
};
