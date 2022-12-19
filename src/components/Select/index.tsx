import styled from 'styled-components';

const Select = styled.select`
  width: 100%;
  padding: 12px 2rem 12px 1rem;
  gap: 0.65rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export default Select;
