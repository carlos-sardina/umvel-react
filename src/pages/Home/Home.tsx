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
  font-size: 2.5rem;
  color: ${({ color }) => color};
  margin-bottom: 10px;
`;

const Description = styled.p<{ color: string }>`
  font-size: 1.2rem;
  margin: 0 0 3.75rem 0;
  color: ${({ color }) => color};
`;

const Directions = styled.p<{ color: string }>`
  font-size: 1rem;
  text-align: center;
  max-width: 50rem;
  line-height: 1.5;
  color: ${({ color }) => color};
`;

export const Home = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <Title color={colors.purple}>
        Welcome to the Rick and Morty&apos;s characters data bank!
      </Title>
      <Description color={colors.pink}>
        Here you will be able to find all the character list form the series, you will also find
        some relevant information for each character.
      </Description>
      <Directions color={colors.cyan}>
        Directions: Navigate to Characters, you will see the main list which includes all the
        characters, to make you easy to find a specific character you can use the search bar. The
        results will be shown once you hit enter, if the search bar is empty, the list will be
        reseted. All the results are paginated, you can navigate through the pages using the buttons
        at the bottom of the page. Enjoy!
      </Directions>
    </Container>
  );
};
