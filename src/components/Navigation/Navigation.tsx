import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';

const Nav = styled.header`
  padding: 1.5rem;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

const Li = styled(Link)`
  margin-right: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.purple};
  font-size: 1.5rem;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const Navigation = () => {
  const theme = useTheme();

  return (
    <Nav>
      <Ul>
        <Li to="/" theme={theme}>
          Home
        </Li>
        <Li to="/characters" theme={theme}>
          Characters
        </Li>
        <Li to="/about" theme={theme}>
          About
        </Li>
      </Ul>
    </Nav>
  );
};
