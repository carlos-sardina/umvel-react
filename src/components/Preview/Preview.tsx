import React from 'react';
import { Character } from '../../types/types';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';

interface PreviewProps {
  character: Character;
}

const Container = styled(Link)<{ color: string }>`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ color }) => color};
  margin: 0.625rem;
  padding: 0.625rem;
  text-decoration: none;
`;

const Name = styled.span<{ color: string }>`
  font-weight: 700;
  font-size: 1.3rem;
  margin: 0.625rem 0 0.938rem 0;
  color: ${({ color }) => color};
`;

const Image = styled.img`
  width: 18.75rem;
  height: 18.75rem;
  max-width: 100%;
`;

const Species = styled.span<{ color: string }>`
  font-weight: 400;
  font-size: 1rem;
  margin: 0.625rem 0 0 0;
  color: ${({ color }) => color};
`;

export const Preview = ({ character }: PreviewProps) => {
  const { colors } = useTheme();

  return (
    <Container to={`/characters/${character.id}`} color={colors.cyan}>
      <Name color={colors.purple}>{character.name}</Name>
      <Image src={character.image} alt={character.name} />
      <Species color={colors.pink}>{character.species}</Species>
    </Container>
  );
};
