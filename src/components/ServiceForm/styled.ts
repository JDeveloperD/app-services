import styled from 'styled-components';
import { SHADOWS } from '../../theme';

export const FormWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: ${SHADOWS.md};
`;
