import { css } from 'styled-components';
import { ButtonSize } from '..';

const sizeSmall = (singleIcon: boolean) => {
  if (singleIcon) {
    return css`
      font-size: 0.75rem;
      padding: 0.45rem;
      border-radius: 0.25rem;
    `;
  }

  return css`
    font-size: 0.75rem;
    padding: 0.35rem 0.7rem;
    gap: 0.25rem;
    border-radius: 0.25rem;
  `;
};

const sizeMedium = (singleIcon: boolean) => {
  if (singleIcon) {
    return css`
      font-size: 1rem;
      padding: 0.88rem;
      border-radius: 0.5rem;
    `;
  }

  return css`
    padding: 12px 26px;
    gap: 0.65rem;
    font-size: 1rem;
    border-radius: 0.5rem;
  `;
};

const sizeLarge = (singleIcon: boolean) => {
  if (singleIcon) {
    return css`
      font-size: 1.25rem;
      padding: 0.88rem;
      border-radius: 0.75rem;
    `;
  }

  return css`
    padding: 0.75rem 1.3rem;
    font-size: 1.25rem;
    gap: 1rem;
    border-radius: 0.75rem;
  `;
};

/**
 * Ontener el tamaño del botón
 * @param size - Tamaño del botón
 * @returns
 */
export const getSizeStyles = (
  size: ButtonSize = 'md',
  singleIcon: boolean = false
) =>
  ({
    sm: sizeSmall(singleIcon),
    md: sizeMedium(singleIcon),
    lg: sizeLarge(singleIcon),
  }[size]);
