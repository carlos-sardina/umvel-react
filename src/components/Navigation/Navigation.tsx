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

const Li = styled(Link)<{ color: string }>`
  margin-right: 1rem;
  text-decoration: none;
  color: ${({ color }) => color};
  font-size: 1.5rem;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const Navigation = () => {
  const { colors } = useTheme();

  return (
    <Nav>
      <Ul>
        <Li to="/" color={colors.purple}>
          Home
        </Li>
        <Li to="/characters" color={colors.purple}>
          Characters
        </Li>
        <Li to="/about" color={colors.purple}>
          About
        </Li>
      </Ul>
    </Nav>
  );
};
