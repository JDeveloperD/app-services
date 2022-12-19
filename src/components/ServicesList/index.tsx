import { Col, Row } from 'react-bootstrap';
import { AnimatePresence } from 'framer-motion';
import ServiceCard from '../ServiceCard';
import { useServiceCtx } from '../../context/service/ServiceCtx';
import ServicesListEmpty from '../ServicesListEmpty';

const ServicesList = () => {
  const { services, selectService, removeService } = useServiceCtx();

  if (services.data.length === 0) {
    return <ServicesListEmpty />;
  }

  return (
    <Row className='g-3 g-lg-4'>
      <AnimatePresence>
        {services.data.map((service) => (
          <Col key={service.id} sm={6} lg={12} xl={6} xxl={4}>
            <ServiceCard
              {...service}
              handleDelete={() => removeService(service.id)}
              handleEdit={() => selectService(service.id)}
            />
          </Col>
        ))}
      </AnimatePresence>
    </Row>
  );
};

export default ServicesList;
