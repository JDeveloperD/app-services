import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 12px 1rem;
  gap: 0.65rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export default Input;
