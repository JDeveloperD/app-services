import styled, { css } from 'styled-components';
import { Color } from '../../types/styled';

type SpinnerProps = {
  $color?: Color;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const Spinner = ({ $color, size, ...props }: SpinnerProps) => (
  <StyledSpinner viewBox='0 0 50 50' color={$color} size={size} {...props}>
    <circle
      className='path'
      cx='25'
      cy='25'
      r='20'
      fill='none'
      strokeWidth='4'
    />
  </StyledSpinner>
);

const StyledSpinner = styled.svg<SpinnerProps>`
  animation: rotate 2s linear infinite;
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return css`
          width: 20px;
          height: 20px;
        `;
      default:
        return css`
          width: 40px;
          height: 40px;
        `;
    }
  }}

  & .path {
    stroke: ${({ theme, $color }) => {
      return $color ? theme.colors[$color] : theme.colors.light;
    }};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default Spinner;
