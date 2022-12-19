import { DefaultTheme } from 'styled-components';
import {
  AMBER_COLOR,
  BASIC_COLOR,
  BRAND_COLOR,
  FONT_FAMILIES,
  NEUTRAL_COLOR,
  ROSE_COLOR,
  TEAL_COLOR,
} from '../variables';

const DarkMode: DefaultTheme = {
  mode: 'dark',
  colors: {
    primary: BRAND_COLOR[500],
    info: '',
    warning: AMBER_COLOR[400],
    danger: ROSE_COLOR[400],
    success: TEAL_COLOR[400],
    white: BASIC_COLOR.white,
    light: NEUTRAL_COLOR[100],
    gray: '',
    black: BASIC_COLOR.black,
    link: BRAND_COLOR[500],
    body: BASIC_COLOR.white,
    text: NEUTRAL_COLOR[700],
    'headline-1': NEUTRAL_COLOR[800],
    'background-1': NEUTRAL_COLOR[100],
    'background-2': NEUTRAL_COLOR[200],
    border: NEUTRAL_COLOR[200],
  },
  fonts: {
    fontPrimary: FONT_FAMILIES.inter,
  },
  fontSizes: {
    base: '1rem',
  },
  shadows: {
    small: '',
    default: '',
  },
};

export default DarkMode;
