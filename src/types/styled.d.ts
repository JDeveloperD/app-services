import 'styled-components';

export type Colors = {
  primary: string;
  info: string;
  warning: string;
  danger: string;
  success: string;
  white: string;
  light: string;
  gray: string;
  black: string;
  link: string;
  body: string;
  text: string;
  'headline-1': string;
  'background-1': string;
  'background-2': string;
  border: string;
};

export type Color = keyof Colors;

export type ThemeMode = 'light' | 'dark';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: ThemeMode;
    colors: Colors;
    fonts: {
      fontPrimary: string;
    };
    fontSizes: {
      base: string;
    };
    shadows: {
      small: string;
      default: string;
    };
  }
}
