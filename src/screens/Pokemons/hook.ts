import { useNavigation } from '@react-navigation/native';
import { useCallback, useMemo, useState } from 'react';
import { useUserContext } from '../../contexts/user';
import { usePokedex } from '../../hooks/main/pokedex';
import { useRegion } from '../../hooks/main/region';
import { useTeam } from '../../hooks/main/team';
import { IPokemonItemList } from '../../interfaces/pokedex';
import { uid } from '../../utils/function';

export const usePokemons = () => {
  const navigation = useNavigation();
  const { region } = useRegion();
  const { pokemons, pokemonsSelected, savePokemonsSelected } = usePokedex();
  console.log(
    '🚀 ~ file: hook.ts ~ line 14 ~ usePokemons ~ pokemonsSelected',
    pokemons.length
  );
  const { teams, updateTeams } = useTeam();
  const { user } = useUserContext();

  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 16;
  const nPages = Math.ceil(pokemons.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const isTeamCompleted =
    pokemonsSelected.length >= 3 && pokemonsSelected.length <= 6;

  const nextPage = () => {
    if (currentPage < nPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const isSelected = useCallback(
    (item: IPokemonItemList) => {
      return pokemonsSelected.some(
        pokemon => pokemon.pokemon_species.name === item.pokemon_species.name
      );
    },
    [pokemonsSelected]
  );

  const onPressPokemon = (item: IPokemonItemList) => {
    const selected = isSelected(item);
    if (!selected && pokemonsSelected.length < 6) {
      return savePokemonsSelected([...pokemonsSelected, item]);
    } else {
      return savePokemonsSelected(
        pokemonsSelected.filter(
          pokemon => pokemon.pokemon_species.name !== item.pokemon_species.name
        )
      );
    }
  };

  const onPressSave = () => {
    const uidVal = uid();
    updateTeams([
      ...teams,
      {
        user_id: user!.id,
        region: region!.name,
        pokemons: pokemonsSelected,
        token: uidVal,
      },
    ]);

    navigation.goBack();
  };

  const currentPokemons = useMemo(
    () => pokemons.slice(indexOfFirstRecord, indexOfLastRecord),
    [indexOfFirstRecord, indexOfLastRecord, pokemons]
  );

  return {
    pokemons,
    currentPokemons,
    pokemonsSelected,
    isTeamCompleted,
    nextPage,
    prevPage,
    isSelected,
    onPressPokemon,
    onPressSave,
  };
};
