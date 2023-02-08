import React, { ReactNode } from 'react';
import { ThemeProvider as Provider } from '@emotion/react';
import { Theme } from '../types/types';

interface ThemeProviderProps {
  theme: Theme;
  children: ReactNode;
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => (
  <Provider theme={theme}>{children}</Provider>
);
