import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 4.75rem - 2.5rem);
  align-items: center;
  justify-content: center;
`;

const Disclaimer = styled.span`
  margin: 30px 0;
`;

const Ul = styled.ul`
  li {
    margin: 5px 0;
  }
`;

export const About = () => {
  return (
    <Container>
      <h1>By Carlos Sardina</h1>
      <h5>Rick and Morty dashboard</h5>
      <Disclaimer>
        As you may see, the main effort is on the characters list / filtering / fetching, home and
        about will remain as simple as possible in order to focus on the main functionality.
      </Disclaimer>
      <Ul>
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
