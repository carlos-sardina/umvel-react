import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../../services';
import { Character } from '../../types/types';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 76px - 40px);
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

const Container = styled.div`
  margin-left: 20px;

  @media (max-width: 850px) {
    margin-top: 30px;
  }
`;

const Header = styled.div`
  font-size: 1rem;
  font-weight: 300;

  @media (max-width: 850px) {
    font-size: 0.8rem;
  }
`;

const Detail = styled.div`
  font-size: 1.5rem;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 850px) {
    font-size: 1.2rem;
  }
`;

export const Details = () => {
  const id = useParams<{ id: string }>().id;
  const [character, setCharacter] = React.useState<Character>();

  useEffect(() => {
    const controller = new AbortController();

    if (!id) {
      return;
    }

    getCharacter({ id, signal: controller.signal }).then((data) => {
      setCharacter(data);
    });

    return () => controller.abort();
  }, [id]);

  return (
    <Wrapper>
      <div>
        <img src={character?.image} alt={character?.name} />
      </div>
      <Container>
        <Detail>
          <Header>Name</Header>
          {character?.name}
        </Detail>
        <Detail>
          <Header>Status</Header>
          {character?.status}
        </Detail>
        <Detail>
          <Header>Gender</Header>
          {character?.gender}
        </Detail>
        <Detail>
          <Header>Species</Header>
          {character?.species}
        </Detail>
        <Detail>
          <Header>Episodes</Header>
          {character?.episode?.slice(0, 13).map((episode) => (
            <p key={episode}>{episode}</p>
          ))}
          {character?.episode?.length && character.episode.length > 13 && (
            <p>+{character.episode.length - 13} more</p>
          )}
        </Detail>
      </Container>
    </Wrapper>
  );
};
