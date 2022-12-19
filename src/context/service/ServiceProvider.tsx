import { ReactNode, useEffect, useState } from 'react';
import { CategoryId, Service, ServiceId } from './Service';
import { getUUID } from '../../utils/generateUUID';
import { isObjectEmpty } from '../../utils/isObjectEmpty';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
import {
  ServiceCtx,
  ServiceFormState,
  ServicesCategoriesState,
  ServicesState,
} from './ServiceCtx';

const ServiceProvider = ({ children }: { children: ReactNode }) => {
  const [services, setServices] = useState<ServicesState>({
    loading: false,
    data: [],
  });

  const [categories, setCategories] = useState<ServicesCategoriesState>({
    data: [],
  });

  const initialValueServiceForm: ServiceFormState = {
    loading: false,
    errors: {},
    data: {
      id: null,
      name: '',
      description: '',
    },
  };

  const [serviceForm, setServiceForm] = useState<ServiceFormState>(
    initialValueServiceForm
  );

  const getServicesInCache = (): Service[] => getLocalStorage('services');

  const setServicesInCache = (services: Service[]) =>
    setLocalStorage('services', services);

  const loadCategories = () => {
    const listCat = [
      {
        id: 'cat-1',
        name: 'Autos',
      },
      {
        id: 'cat-2',
        name: 'Salud',
      },
      {
        id: 'cat-3',
        name: 'Hogar',
      },
    ];
    setCategories({ ...categories, data: listCat });
    setLocalStorage('categories', listCat);
  };

  const loadServices = () => {
    const servicesCache = getServicesInCache();

    if (servicesCache) {
      setServices({ ...services, data: servicesCache });
    }
  };

  const addService = (service: Service) => {
    const servicesData = services.data;

    const newList = [
      ...servicesData,
      { ...service, id: getUUID(), createdAt: new Date() },
    ];

    setServices({ ...services, data: newList });
    setServicesInCache(newList);
  };

  const updateService = (service: Service) => {
    const serviceUpdated = services.data.map((s) =>
      s.id === service.id ? service : s
    );

    setServices({ ...services, data: serviceUpdated });
    setServicesInCache(serviceUpdated);
    clearServiceForm();
  };

  const removeService = (id: ServiceId) => {
    const serviceDeleted = services.data.filter((service) => service.id !== id);
    setServices({ ...services, data: serviceDeleted });
    setServicesInCache(serviceDeleted);
  };

  const clearServiceForm = () => {
    setServiceForm(initialValueServiceForm);
  };

  const selectService = (id: ServiceId) => {
    const service = findService(id);

    if (service) {
      setServiceForm({ ...serviceForm, data: service });
    }
  };

  const findService = (id: ServiceId) =>
    services.data.find((service) => service.id === id);

  const getService = (id: ServiceId) => {
    return services.data.find((service) => service.id === id);
  };

  const changeValueServiceFormState = (key: string, value: any) => {
    setServiceForm({
      ...serviceForm,
      data: {
        ...serviceForm.data,
        [key]: value,
      },
    });
  };

  const isValidDataServiceForm = (): boolean => {
    const errorMessages: {
      name?: string;
      description?: string;
      category?: string;
    } = {};

    if (!serviceForm.data.name) {
      errorMessages.name = 'El nombre del servicio es requerido.';
    }

    if (!serviceForm.data.description) {
      errorMessages.description = 'Agregue una descripción al servicio';
    }

    if (!serviceForm.data.category) {
      errorMessages.category = 'Seleccione una categoría para el servicio.';
    }

    setServiceForm({ ...serviceForm, errors: errorMessages });

    return isObjectEmpty(errorMessages);
  };

  const filterByCategory = (category: CategoryId) => {
    const servicesCache = getServicesInCache();

    if (category) {
      const servicesFiltered = servicesCache.filter(
        (service) => service.category.id === category
      );

      setServices({ ...services, data: servicesFiltered });
    } else {
      setServices({ ...services, data: servicesCache });
    }
  };

  useEffect(() => {
    loadCategories();
    loadServices();
  }, []);

  return (
    <ServiceCtx.Provider
      value={{
        services,
        serviceForm,
        categories,
        changeValueServiceFormState,
        clearServiceForm,
        addService,
        isValidDataServiceForm,
        updateService,
        removeService,
        getService,
        selectService,
        filterByCategory,
      }}
    >
      {children}
    </ServiceCtx.Provider>
  );
};

export default ServiceProvider;
