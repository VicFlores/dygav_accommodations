import { Accommodation } from '../accommodations/interfaces';
import { crmApi } from '../config';

export const getAccommodations = async () => {
  try {
    const response = await crmApi.get<Accommodation[]>('/accommodations');

    return response.data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};
