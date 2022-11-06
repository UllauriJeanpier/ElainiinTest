import { IPokemonItemList } from './pokedex';

export interface ITeam {
  user_id: string;
  region: string;
  token: string;
  pokemons: IPokemonItemList[];
}
