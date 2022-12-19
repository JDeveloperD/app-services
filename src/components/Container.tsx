import { ReactNode } from 'react';
import { Container } from 'react-bootstrap';

const MainContainer = ({ children }: { children: ReactNode }) => {
  return <Container fluid>{children}</Container>;
};

export default MainContainer;
