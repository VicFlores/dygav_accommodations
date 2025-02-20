import { Category } from '../accommodations/interfaces';
import { crmApi } from '../config';

export const getCategories = async () => {
  try {
    const response = await crmApi.get<Category[]>('/categories');

    return response.data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};
