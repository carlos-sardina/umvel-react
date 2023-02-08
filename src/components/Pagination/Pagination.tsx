import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Button = styled.button<{
  color: string;
  background: string;
  isActive: boolean;
  activeColor: string;
}>`
  margin: 0 0.1rem;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({ background, isActive, activeColor }) =>
    isActive ? activeColor : background};
  color: ${({ color }) => color};
  border: none;
  font-weight: ${({ isActive }) => (isActive ? '700' : '300')};

  &:hover {
    cursor: pointer;
  }
`;

interface PaginationProps {
  pages: number;
  current: number;
  setPage: (page: number) => void;
}

export const Pagination = ({ pages, current, setPage }: PaginationProps) => {
  const { colors } = useTheme();

  return (
    <Container>
      {Array.from({ length: pages }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          onClick={() => setPage(page)}
          background={colors.cyan}
          color={colors.black}
          isActive={page === current}
          activeColor={colors.pink}
        >
          {page}
        </Button>
      ))}
    </Container>
  );
};
