export interface User {
    id: string;
    email: string;
    name?: string;
    createdAt: Date;
  }
  
  export interface ApiResponse<T> {
    data: T | null;
    error: string | null;
  }
  
  export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    pageSize: number;
  }