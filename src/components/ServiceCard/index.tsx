import Button from '../Button';
import {
  ServiceCardBody,
  ServiceCardFooter,
  ServiceCardHead,
  ServiceCardWrapper,
} from './styled';
import Typography from '../Typography';
import { BsCalendar3, BsTags } from 'react-icons/bs';
import dayjs from 'dayjs';
import { MdOutlineDelete } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import { FC } from 'react';
import { Service } from '../../context/service/Service';

type ServiceCardProps = Service & {
  handleEdit: (id: any) => void;
  handleDelete: (id: any) => void;
};

const ServiceCard: FC<ServiceCardProps> = ({
  name,
  description,
  category,
  createdAt,
  handleEdit,
  handleDelete,
}) => {
  return (
    <ServiceCardWrapper
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      layout
    >
      <ServiceCardHead>
        <Typography as='h4' size='xl'>
          {name}
        </Typography>
      </ServiceCardHead>

      <ServiceCardBody>
        <Typography $color='gray' size='sm' className='mb-3 mb-lg-4' elipsis>
          {description}
        </Typography>
        <div className='d-flex gap-2 align-items-center mb-2'>
          <BsTags />
          <Typography as='span' $color='gray' size='sm'>
            Categoría: {category.name}
          </Typography>
        </div>
        <div className='d-flex gap-2 align-items-center mb-2'>
          <BsCalendar3 />
          <Typography as='span' $color='gray' size='sm'>
            Registrado: {dayjs(createdAt).format('DD/MM/YYYY HH:mm:ss a')}
          </Typography>
        </div>
      </ServiceCardBody>

      <ServiceCardFooter>
        <Button
          $color='success'
          size='sm'
          variant='contained'
          onClick={handleEdit}
        >
          <AiOutlineEdit /> Editar
        </Button>
        <Button
          $color='danger'
          size='sm'
          variant='contained'
          onClick={handleDelete}
        >
          <MdOutlineDelete /> Eliminar
        </Button>
      </ServiceCardFooter>
    </ServiceCardWrapper>
  );
};

export default ServiceCard;
