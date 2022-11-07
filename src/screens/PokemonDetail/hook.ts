import { usePokedex } from '../../hooks/main/pokedex';

export const usePokemonDetail = () => {
  const { pokemonDetail } = usePokedex();

  return {
    pokemonDetail,
  };
};
