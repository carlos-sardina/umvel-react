import { Character, GetCharactersResponse } from '../types/types';

interface GetCharactersProps {
  page?: number;
  signal: AbortSignal;
}

export const getCharacters = async ({ page = 1, signal }: GetCharactersProps) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`, {
    signal,
  });
  const data: GetCharactersResponse = await response.json();
  return data;
};

export const getCharacter = async (id: number) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data: Character = await response.json();
  return data;
};
