import { css } from 'styled-components';
import { TypographyFontWeight } from '..';

export const getTypographyFontWeight = (
  weight: TypographyFontWeight = 'normal'
) =>
  ({
    normal: css`
      font-weight: 400;
    `,
    semibold: css`
      font-weight: 600;
    `,
  }[weight]);
