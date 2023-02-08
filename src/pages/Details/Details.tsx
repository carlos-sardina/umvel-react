import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../../services';
import { Character } from '../../types/types';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const Wrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 4.75rem - 2.5rem);
  align-items: center;
  justify-content: center;

  @media (max-width: 53.125rem) {
    flex-direction: column;
    margin-top: 1.25rem;
  }
`;

const Container = styled.div<{ color: string }>`
  margin-left: 1.25rem;
  color: ${(props) => props.color};

  @media (max-width: 53.125rem) {
    margin-top: 1.875rem;
  }
`;

const Header = styled.div<{ color: string }>`
  font-size: 1rem;
  font-weight: 300;
  color: ${(props) => props.color};

  @media (max-width: 53.125rem) {
    font-size: 0.8rem;
  }
`;

const Detail = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.625rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 53.125rem) {
    font-size: 1.2rem;
  }
`;

export const Details = () => {
  const { colors } = useTheme();
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
      <Container color={colors.cyan}>
        <Detail>
          <Header color={colors.pink}>Name</Header>
          {character?.name}
        </Detail>
        <Detail>
          <Header color={colors.pink}>Status</Header>
          {character?.status}
        </Detail>
        <Detail>
          <Header color={colors.pink}>Gender</Header>
          {character?.gender}
        </Detail>
        <Detail>
          <Header color={colors.pink}>Species</Header>
          {character?.species}
        </Detail>
        <Detail>
          <Header color={colors.pink}>Episodes</Header>
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
