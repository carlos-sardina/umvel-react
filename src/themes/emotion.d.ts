import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    name: string;
    colors: {
      black: string;
      purple: string;
      pink: string;
      cyan: string;
    };
  }
}
