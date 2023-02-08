export interface Theme {
  name: string;
  colors: {
    black: string;
    purple: string;
    pink: string;
    cyan: string;
  };
}

export type Character = {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  episode: string[];
};

export type GetCharactersResponse = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Character[];
};
