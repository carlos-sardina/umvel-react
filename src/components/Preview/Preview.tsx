import React from 'react';
import { Character } from '../../types/types';
import styled from '@emotion/styled';

interface PreviewProps {
  character: Character;
}

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background-color: #3ccaff;
  margin: 10px;
  padding: 10px;
`;

const Name = styled.span`
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

const Species = styled.span`
  font-weight: 400;
  font-size: 1rem;
  margin: 10px 0 0 0;
  color: #fe3dbc;
`;

export const Preview = ({ character }: PreviewProps) => {
  return (
    <Container>
      <Name>{character.name}</Name>
      <Image src={character.image} alt={character.name} />
      <Species>{character.species}</Species>
    </Container>
  );
};
