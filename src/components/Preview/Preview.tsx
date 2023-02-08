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
  background-color: #3ccaff;
  margin: 10px;
  padding: 10px;
  text-decoration: none;
`;

const Name = styled.span<{ color: string }>`
  font-weight: 700;
  font-size: 1.3rem;
  margin: 10px 0 15px 0;
  color: #6b47fe;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  max-width: 100%;
`;

const Species = styled.span<{ color: string }>`
  font-weight: 400;
  font-size: 1rem;
  margin: 10px 0 0 0;
  color: #fe3dbc;
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
