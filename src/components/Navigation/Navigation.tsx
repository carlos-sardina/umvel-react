import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Nav = styled.header`
  padding: 1rem;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

const Li = styled.li`
  margin-right: 1rem;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Navigation = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <Link to="/characters">Characters</Link>
        </Li>
        <Li>
          <Link to="/about">About</Link>
        </Li>
      </Ul>
    </Nav>
  );
};
