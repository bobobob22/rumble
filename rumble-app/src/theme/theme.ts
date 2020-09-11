import { DefaultTheme } from 'styled-components';


export interface CustomTheme extends DefaultTheme {
  color: {
    main: string;
    greyBg: string;
    error: string;
    active: string;
  },
  zIndex: {
    modal: number
  },
  breakpoints: {
    values: {
      sm: number;
      md: number;
      lg: number;
      xl: number;
    },
    up?: (key: string) => string;
  }
}

export const theme: CustomTheme = {
  color: {
    main: '#9dc539',
    greyBg: '#F5F6FB',
    error: '#EC4E4F',
    active: '#65CC94',
  },
  zIndex: {
    modal: 99999,
  },
  breakpoints: {
    values: {
      sm: 576,
      md: 768,
      lg: 991,
      xl: 1200,
    },
    // up: (key: string): string => {
    //   const value = theme.breakpoints.values[key];
    //   return `@media all and (min-width: ${value}px)`;
    // },
  }
};

