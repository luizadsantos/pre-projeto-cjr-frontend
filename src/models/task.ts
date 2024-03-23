export interface Task {
  id: number;
  name: string;
  isActive: boolean;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTask {
  id?: number;
  name: string;
  isActive?: boolean;
  categoryId?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface UpdateTask {
  id: number;
  name?: string;
  isActive?: boolean;
  categoryId?: number;
  createdAt?: string;
  updatedAt?: string;
}
