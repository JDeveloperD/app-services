import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Color } from '../../types/styled';
import { getFullWidthStyles } from './utils/getFullWidth';
import { getSizeStyles } from './utils/getSize';
import { getButtonVariantStyles } from './utils/getVariant';

export type ButtonVariant = 'contained' | 'outlined' | 'text';
export type ButtonColor = Color;
export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  $color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: boolean;
};

export default styled.button<ButtonProps>`
  background: transparent;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  transition: 0.2s ease-in-out;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  ${({ fullWidth }) => getFullWidthStyles(fullWidth)}

  ${({ size, icon }) => getSizeStyles(size, icon)}

  ${({ $color, variant, theme }) =>
    getButtonVariantStyles(variant, theme.colors[$color || 'primary'])}

  &:disabled {
    background: ${({ theme }) => theme.colors.gray};
    color: white;
  }
`;
