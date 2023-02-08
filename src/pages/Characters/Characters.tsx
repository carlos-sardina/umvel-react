import React, { useEffect } from 'react';
import { Character } from '../../types/types';
import { getCharacters } from '../../services';
import { Preview } from '../../components';
import styled from '@emotion/styled';

const Container = styled.div`
  flex-flow: row wrap;
  display: flex;
  justify-content: space-evenly;
`;

export const Characters = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    getCharacters({ signal: controller.signal }).then(({ results }) => {
      setCharacters(results);
    });

    return () => controller.abort();
  }, []);

  return (
    <Container>
      {characters.map((character) => (
        <Preview key={character.id} character={character} />
      ))}
    </Container>
  );
};
