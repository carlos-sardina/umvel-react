import React, { ReactNode } from 'react';
import { ThemeProvider as Provider } from '@emotion/react';
import { Theme } from '../types/types';

export interface ThemeProviderProps {
  theme: Theme;
  children: ReactNode;
}

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => (
  <Provider theme={theme}>{children}</Provider>
);

export default ThemeProvider;
