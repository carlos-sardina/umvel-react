import React, { useEffect } from 'react';
import { GetCharactersResponse } from '../../types/types';
import { getCharacterByName } from '../../services';
import { Preview, Pagination } from '../../components';
import styled from '@emotion/styled';

const Container = styled.div`
  flex-flow: row wrap;
  display: flex;
  justify-content: space-evenly;
  min-height: calc(100vh - 4.75rem - 8.7rem);
`;

interface Props {
  term: string;
}

export const ListCharactersByName = ({ term }: Props) => {
  const [response, setResponse] = React.useState<GetCharactersResponse>();
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    const controller = new AbortController();

    getCharacterByName({ page, signal: controller.signal, name: term })
      .then((data) => {
        setResponse(data);
      })
      .catch((error) => {
        console.log('> Error: ', error);
      });

    return () => controller.abort();
  }, [page, term]);

  return (
    <div>
      <Container>
        {response?.results
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((character) => (
            <Preview key={character.id} character={character} />
          ))}
      </Container>
      <Pagination pages={response?.info.pages || 0} current={page} setPage={setPage} />
    </div>
  );
};
