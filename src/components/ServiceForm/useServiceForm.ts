import { ChangeEventHandler } from 'react';
import { Service } from '../../context/service/Service';
import { ServiceCtxInterface } from '../../context/service/ServiceCtx';
export const useServiceForm = (ctx: ServiceCtxInterface) => {
  const {
    categories,
    serviceForm: { data },
    changeValueServiceFormState,
    clearServiceForm,
    addService,
    isValidDataServiceForm,
    updateService,
  } = ctx;

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

  return {
    handleCancel,
    handleOnChangeInput,
    handleOnChangeSelect,
    handleSave,
  };
};
