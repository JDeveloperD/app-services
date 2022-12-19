import styled, { css } from 'styled-components';
import { Color } from '../../types/styled';
import { getElipsisStyles } from './utils/getElipsis';
import { getTypographyFontWeight } from './utils/getFontWeight';
import { getTypographySizeStyles } from './utils/getSize';

export type TypographyFontWeight = 'normal' | 'semibold';
export type TypographyColor = Color;
export type TypographySize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl';

export type TypographyProps = {
  $color?: TypographyColor;
  size?: TypographySize;
  weight?: TypographyFontWeight;
  isGradient?: boolean;
  elipsis?: boolean;
};

const Typography = styled.p<TypographyProps>`
  margin-bottom: 0;
  color: ${({ theme, $color }) => $color && theme.colors[$color]};

  ${({ weight }) => getTypographyFontWeight(weight)};

  ${({ size }) => getTypographySizeStyles(size)};

  ${({ elipsis }) => elipsis && getElipsisStyles}
`;

export default Typography;
