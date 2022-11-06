export interface IRegionListResponse {
  count: number;
  next: null;
  previous: null;
  results: IRegionItem[];
}

export interface IRegionItem {
  name: string;
  url: string;
}

export interface IRegionResponse {
  id: number;
  locations: IRegionItem[];
  main_generation: IRegionItem;
  name: string;
  names: Name[];
  pokedexes: IRegionItem[];
  version_groups: IRegionItem[];
}

export interface Name {
  language: IRegionItem;
  name: string;
}
