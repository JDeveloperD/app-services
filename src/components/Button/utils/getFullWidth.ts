import { css } from 'styled-components';

/**
 * Obtener un ancho de un botón con el 100% o de tipo inline
 * @param isFullWidth
 * @returns
 */
export const getFullWidthStyles = (isFullWidth?: boolean) => {
  if (isFullWidth) {
    return css`
      width: 100%;
      display: flex;
    `;
  }

  return css`
    display: inline-flex;
  `;
};
