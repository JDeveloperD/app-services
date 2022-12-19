import { createContext, useContext } from 'react';
import { Category, CategoryId, Service, ServiceId } from './Service';

export interface ServicesState {
  loading: boolean;
  data: Service[];
}

export interface ServiceState {
  id: ServiceId | null;
  name: string;
  description: string;
  category?: Category;
}

export interface ServiceFormState {
  loading: boolean;
  errors: { name?: string; description?: string; category?: string };
  data: ServiceState;
}

export interface ServicesCategoriesState {
  data: Category[];
}

export interface ServiceCtxInterface {
  services: ServicesState;
  serviceForm: ServiceFormState;
  categories: ServicesCategoriesState;

  changeValueServiceFormState: (key: string, value: any) => void;
  clearServiceForm: () => void;
  addService: (service: Service) => void;
  isValidDataServiceForm: () => boolean;
  updateService: (service: Service) => void;
  removeService: (id: ServiceId) => void;
  getService: (id: ServiceId) => void;
  selectService: (id: ServiceId) => void;
  filterByCategory: (categoryId: CategoryId) => void;
}

export const ServiceCtx = createContext<ServiceCtxInterface>(
  {} as ServiceCtxInterface
);

export const useServiceCtx = () => useContext(ServiceCtx);
