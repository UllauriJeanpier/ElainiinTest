export interface IPokedexResponse {
  descriptions: IDescription[];
  id: number;
  is_main_series: boolean;
  name: string;
  names: IName[];
  pokemon_entries: IPokemonItemList[];
  region: IRegionItemList;
  version_groups: IRegionItemList[];
}

export interface IDescription {
  description: string;
  language: IRegionItemList;
}

export interface IRegionItemList {
  name: string;
  url: string;
}

export interface IName {
  language: IRegionItemList;
  name: string;
}

export interface IPokemonItemList {
  entry_number: number;
  pokemon_species: IRegionItemList;
}
