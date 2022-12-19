export type CategoryId = string;

export interface Category {
  id: CategoryId;
  name: string;
}

export type ServiceId = string;

interface Service {
  id: ServiceId;
  name: string;
  description: string;
  category: Category;
  createdAt: Date;
}

export type { Service };
