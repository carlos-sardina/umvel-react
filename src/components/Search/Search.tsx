import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 1rem 1rem 0;
  align-items: center;
`;

const Label = styled.label<{ color: string }>`
  margin-right: 0.5rem;
  color: ${({ color }) => color};
`;

const Input = styled.input<{ color: string; background: string; border: string }>`
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  border: none;
  padding: 0.5rem;
  border-bottom: 1px solid ${({ border }) => border};
  font-size: 1rem;
  font-weight: 700;

  &:focus {
    outline: none;
  }
`;

interface SearchProps {
  callback: (term: string | null) => void;
}

export const Search = ({ callback }: SearchProps) => {
  const { colors } = useTheme();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      callback(inputRef?.current?.value || null);
    }
  };

  return (
    <Container>
      <Label htmlFor="search" color={colors.pink}>
        Search:
      </Label>
      <Input
        type="text"
        placeholder="Rick"
        id="search"
        background={colors.black}
        color={colors.cyan}
        border={colors.pink}
        onKeyDown={handleChange}
        ref={inputRef}
      />
    </Container>
  );
};
