import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 4.75rem - 2.5rem);
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1<{ color: string }>`
  color: ${({ color }) => color};
`;

const Description = styled.h4<{ color: string }>`
  color: ${({ color }) => color};
`;

const Disclaimer = styled.span<{ color: string }>`
  margin: 1.875rem 0;
  color: ${({ color }) => color};
`;

const Ul = styled.ul<{ color: string }>`
  color: ${({ color }) => color};
  li {
    margin: 0.313rem 0;
  }
`;

export const About = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <Title color={colors.purple}>By Carlos Sardina</Title>
      <Description color={colors.purple}>Rick and Morty dashboard</Description>
      <Disclaimer color={colors.pink}>
        As you may see, the main effort is on the characters list / filtering / fetching, home and
        about will remain as simple as possible in order to focus on the main functionality.
      </Disclaimer>
      <Ul color={colors.cyan}>
        <li>React v18</li>
        <li>Emotion for styling components</li>
        <li>Prettier for formatting</li>
        <li>React Router as app router</li>
        <li>Eslint for linting</li>
        <li>Github as version manager</li>
      </Ul>
    </Container>
  );
};
