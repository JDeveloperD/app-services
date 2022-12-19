import Typography from '../Typography';
import { TbMoodEmpty } from 'react-icons/tb';

const ServicesListEmpty = () => {
  return (
    <div>
      <Typography>
        {' '}
        <TbMoodEmpty /> No hay servicios
      </Typography>
    </div>
  );
};

export default ServicesListEmpty;
