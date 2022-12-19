import styled from 'styled-components';
import { MEDIA_BREAKPOINTS } from '../../theme';
import { SHADOWS } from '../../theme/variables/shadows';
import { motion } from 'framer-motion';

export const ServiceCardWrapper = styled(motion.article)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: ${SHADOWS.md};
  height: 100%;

  ${MEDIA_BREAKPOINTS.laptop} {
    padding: 1.5rem;
  }
`;

export const ServiceCardHead = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;

  ${MEDIA_BREAKPOINTS.tablet} {
    margin-bottom: 1.5rem;
  }
`;

export const ServiceCardFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2.5rem;
`;

export const ServiceCardBody = styled.main``;
