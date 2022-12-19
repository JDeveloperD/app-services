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

const LightMode: DefaultTheme = {
  mode: 'light',
  colors: {
    primary: BRAND_COLOR[500],
    info: '',
    warning: AMBER_COLOR[600],
    danger: ROSE_COLOR[600],
    success: TEAL_COLOR[600],
    white: BASIC_COLOR.white,
    light: NEUTRAL_COLOR[100],
    gray: NEUTRAL_COLOR[400],
    black: BASIC_COLOR.black,
    link: BRAND_COLOR[500],
    body: NEUTRAL_COLOR[50],
    text: NEUTRAL_COLOR[700],
    'headline-1': NEUTRAL_COLOR[800],
    'background-1': NEUTRAL_COLOR[100],
    'background-2': NEUTRAL_COLOR[200],
    border: NEUTRAL_COLOR[300],
  },
  fonts: {
    fontPrimary: FONT_FAMILIES.inter,
  },
  fontSizes: {
    base: '1rem',
  },
  shadows: {
    small: 'inset 0px 2px 4px rgba(103, 114, 150, 0.06)',
    default:
      '0px 1px 3px rgba(103, 114, 150, 0.1), 0px 1px 2px rgba(103, 114, 150, 0.06)',
  },
};

export default LightMode;
