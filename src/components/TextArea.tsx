import styled from 'styled-components';

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 1rem;
  gap: 0.65rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.fonts.fontPrimary};
`;

export default TextArea;
