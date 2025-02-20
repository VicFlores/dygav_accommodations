import { crmApi } from '../config';

export const getAccommodation = async (id: string) => {
  try {
    const response = await crmApi.get(`/accommodations/${id}`);

    return response.data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};
