import React, { useEffect } from 'react';
import { GetCharactersResponse } from '../../types/types';
import { getCharacters } from '../../services';
import { Preview, Pagination } from '../../components';
import styled from '@emotion/styled';

const Container = styled.div`
  flex-flow: row wrap;
  display: flex;
  justify-content: space-evenly;
`;

export const Characters = () => {
  const [response, setResponse] = React.useState<GetCharactersResponse>();
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    const controller = new AbortController();

    getCharacters({ page, signal: controller.signal }).then((data) => {
      setResponse(data);
    });

    return () => controller.abort();
  }, [page]);

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
