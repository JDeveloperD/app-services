import { Col, Row } from 'react-bootstrap';
import MainContainer from '../components/Container';
import Filters from '../components/Filters';
import ServiceForm from '../components/ServiceForm';
import Typography from '../components/Typography';
import ServicesList from '../components/ServicesList';

const HomePage = () => {
  return (
    <section className='py-5'>
      <MainContainer>
        <Row className='py-3 align-items-center g-3'>
          <Col sm={6} md={4}>
            <Typography as='h2' size='xl' className='mb-2'>
              Servicios
            </Typography>
            <Typography $color='gray' size='sm'>
              Agrega, edita o modifica los servicios.
            </Typography>
          </Col>
          <Col sm={6} md={8} className='text-end'>
            <Filters />
          </Col>
        </Row>
        <Row>
          <Col lg={6} xl={8}>
            <ServicesList />
          </Col>
          <Col lg={6} xl={4}>
            <ServiceForm />
          </Col>
        </Row>
      </MainContainer>
    </section>
  );
};

export default HomePage;
