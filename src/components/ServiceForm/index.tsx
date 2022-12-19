import { ChangeEventHandler } from 'react';
import { Service } from '../../app/services/domain/Service';
import { useServiceCtx } from '../../context/service/ServiceCtx';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import Spinner from '../Spinner';
import TextArea from '../TextArea';
import Typography from '../Typography';
import { FormWrapper } from './styled';

const ServiceForm = () => {
  const {
    categories,
    serviceForm: { data, errors, loading },
    changeValueServiceFormState,
    clearServiceForm,
    addService,
    isValidDataServiceForm,
    updateService,
  } = useServiceCtx();

  const handleSave = () => {
    if (isValidDataServiceForm()) {
      if (data.id) {
        updateService(data as Service);
      } else {
        addService(data as Service);
      }
      clearServiceForm();
    }
  };

  const handleOnChangeInput: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    changeValueServiceFormState(name, value);
  };

  const handleOnChangeSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { name, value: categoryId } = e.target;
    const categoryFound = categories.data.find(
      (category) => category.id === categoryId
    );

    changeValueServiceFormState(name, categoryFound);
  };

  const handleCancel = () => clearServiceForm();

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
          value={data.name}
          onChange={handleOnChangeInput}
        />
        {errors.name && (
          <Typography size='sm' $color='danger'>
            {errors.name}
          </Typography>
        )}
      </div>
      <div className='mb-3'>
        <Select
          name='category'
          value={data.category?.id}
          onChange={handleOnChangeSelect}
        >
          <option value=''>Selecciona una categoría</option>
          {categories.data.map((service: any) => (
            <option value={service.id} key={service.id}>
              {service.name}
            </option>
          ))}
        </Select>
        {errors.category && (
          <Typography size='sm' $color='danger'>
            {errors.category}
          </Typography>
        )}
      </div>
      <div className='mb-3'>
        <TextArea
          rows={3}
          placeholder='Descripción'
          name='description'
          value={data.description}
          onChange={handleOnChangeInput}
        />
        {errors.description && (
          <Typography size='sm' $color='danger'>
            {errors.description}
          </Typography>
        )}
      </div>
      <Button
        type='button'
        $color='primary'
        variant='contained'
        className='me-3'
        onClick={handleSave}
        disabled={loading}
      >
        {loading && <Spinner size='sm' />}
        {data.id ? 'Editar' : 'Grabar'}
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
