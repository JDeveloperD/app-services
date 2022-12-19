import Select from '../Select';
import { useServiceCtx } from '../../context/service/ServiceCtx';
import Typography from '../Typography';
import { FilterWrapper } from './styled';
import { ChangeEventHandler } from 'react';

const Filters = () => {
  const { filterByCategory, categories } = useServiceCtx();

  const handleFilterByCategory: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { value } = e.target;

    filterByCategory(value);
  };

  return (
    <FilterWrapper>
      <Typography>Filtrar:</Typography>
      <Select onChange={handleFilterByCategory}>
        <option value=''>Todos</option>
        {categories.data.map((service) => (
          <option key={service.id} value={service.id}>
            {service.name}
          </option>
        ))}
      </Select>
    </FilterWrapper>
  );
};

export default Filters;
