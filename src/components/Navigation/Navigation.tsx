import React from 'react';
import styled from '@emotion/styled';

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
        <Li>Home</Li>
        <Li>Characters</Li>
        <Li>About</Li>
      </Ul>
    </Nav>
  );
};
