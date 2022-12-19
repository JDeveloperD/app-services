import { useServiceCtx } from '../../context/service/ServiceCtx';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import Spinner from '../Spinner';
import TextArea from '../TextArea';
import Typography from '../Typography';
import { FormWrapper } from './styled';
import { useServiceForm } from './useServiceForm';

const ServiceForm = () => {
  const ctx = useServiceCtx();

  const {
    handleOnChangeInput,
    handleOnChangeSelect,
    handleSave,
    handleCancel,
  } = useServiceForm(ctx);

  return (
    <FormWrapper>
      <Typography as='h3' size='xl' className='mb-3'>
        Servicio
      </Typography>
      <div className='mb-3'>
        <Input
          type='text'
          placeholder='Nombre'
          name='name'
          value={ctx.serviceForm.data.name}
          onChange={handleOnChangeInput}
        />
        {ctx.serviceForm.errors.name && (
          <Typography size='sm' $color='danger'>
            {ctx.serviceForm.errors.name}
          </Typography>
        )}
      </div>
      <div className='mb-3'>
        <Select
          name='category'
          value={ctx.serviceForm.data.category?.id}
          onChange={handleOnChangeSelect}
        >
          <option value=''>Selecciona una categoría</option>
          {ctx.categories.data.map((service: any) => (
            <option value={service.id} key={service.id}>
              {service.name}
            </option>
          ))}
        </Select>
        {ctx.serviceForm.errors.category && (
          <Typography size='sm' $color='danger'>
            {ctx.serviceForm.errors.category}
          </Typography>
        )}
      </div>
      <div className='mb-3'>
        <TextArea
          rows={3}
          placeholder='Descripción'
          name='description'
          value={ctx.serviceForm.data.description}
          onChange={handleOnChangeInput}
        />
        {ctx.serviceForm.errors.description && (
          <Typography size='sm' $color='danger'>
            {ctx.serviceForm.errors.description}
          </Typography>
        )}
      </div>
      <Button
        type='button'
        $color='primary'
        variant='contained'
        className='me-3'
        onClick={handleSave}
        disabled={ctx.serviceForm.loading}
      >
        {ctx.serviceForm.loading && <Spinner size='sm' />}
        {ctx.serviceForm.data.id ? 'Editar' : 'Grabar'}
      </Button>
      <Button
        type='button'
        $color='danger'
        variant='contained'
        onClick={handleCancel}
      >
        Cancelar
      </Button>
    </FormWrapper>
  );
};

export default ServiceForm;
