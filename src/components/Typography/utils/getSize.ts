import { css } from 'styled-components';
import { TypographySize } from '..';
import { MEDIA_BREAKPOINTS } from '../../../theme';
import { getTypographyFontWeight } from './getFontWeight';

export const getTypographySizeStyles = (size: TypographySize = 'base') =>
  ({
    xs: css`
      font-size: 0.75rem;
      line-height: 1rem;
    `,
    sm: css`
      font-size: 0.875rem;
      line-height: 1.25rem;
    `,
    base: css`
      font-size: 1rem;
      line-height: 1.5rem;
    `,
    lg: css`
      font-size: 1.125rem;
      line-height: 1.75rem;
    `,
    xl: css`
      ${getTypographyFontWeight('semibold')}
      ${MEDIA_BREAKPOINTS.tablet} {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
    `,
    '2xl': css`
      ${getTypographyFontWeight('semibold')}
      font-size: 1.25rem;
      line-height: 1.75rem;

      ${MEDIA_BREAKPOINTS.tablet} {
        font-size: 1.5rem;
        line-height: 2rem;
      }
    `,
    '3xl': css`
      ${getTypographyFontWeight('semibold')}
      font-size: 1.5rem;
      line-height: 2rem;

      ${MEDIA_BREAKPOINTS.tablet} {
        font-size: 1.875rem;
        line-height: 2.25rem;
      }
    `,
    '4xl': css`
      ${getTypographyFontWeight('semibold')}
      font-size: 1.875rem;
      line-height: 2.25rem;

      ${MEDIA_BREAKPOINTS.tablet} {
        font-size: 2.25rem;
        line-height: 2.5rem;
      }
    `,
    '5xl': css`
      ${getTypographyFontWeight('semibold')}
      font-size: 2.25rem;
      line-height: 2.5rem;

      ${MEDIA_BREAKPOINTS.tablet} {
        font-size: 3rem;
        line-height: 3rem;
      }
    `,
  }[size]);
