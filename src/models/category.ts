export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCategory {
  id?: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UpdateCategory {
  id: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}
