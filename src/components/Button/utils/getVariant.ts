import { darken, rgba } from 'polished';
import { css } from 'styled-components';
import { ButtonVariant } from '..';

const variantContained = (color: string) => css`
  color: white;
  background: ${color};

  &:hover {
    background: ${darken(0.15, color)};
  }

  &:active {
    background: ${darken(0.5, color)};
  }
`;

const variantOutlined = (color: string) => css`
  color: ${color};
  border-color: ${color};

  &:hover {
    background: ${rgba(color, 0.1)};
    border-color: ${darken(0.2, color)};
  }

  &:active {
    background: ${rgba(color, 0.25)};
  }
`;

const variantText = (color: string) => css`
  color: ${color};

  &:hover {
    background: ${rgba(color, 0.1)};
  }

  &:active {
    background: ${rgba(color, 0.25)};
  }
`;

/**
 * Obtener la variante del botón con borde, con fondo o sólo texto
 * @param variant
 * @param color
 * @returns
 */
export const getButtonVariantStyles = (
  variant: ButtonVariant = 'text',
  color: string
) =>
  ({
    contained: variantContained(color),
    outlined: variantOutlined(color),
    text: variantText(color),
  }[variant]);
