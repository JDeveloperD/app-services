import styled from 'styled-components';
import { MEDIA_BREAKPOINTS } from '../../theme';

export const FilterWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  ${MEDIA_BREAKPOINTS.tablet} {
    display: inline-flex;
  }
`;
