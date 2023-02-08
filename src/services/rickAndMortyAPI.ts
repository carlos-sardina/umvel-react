import { Character, GetCharactersResponse } from '../types/types';

interface GetCharactersProps {
  page: number;
  signal: AbortSignal;
}

export const getCharacters = async ({ page, signal }: GetCharactersProps) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`, {
    signal,
  });
  const data: GetCharactersResponse = await response.json();
  return data;
};

interface GetCharacterProps {
  id: string;
  signal: AbortSignal;
}

export const getCharacter = async ({ id, signal }: GetCharacterProps) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    signal,
  });
  const data: Character = await response.json();
  return data;
};
