import { Accommodation } from '../accommodations/interfaces';
import { crmApi } from '../config';

export const getAccommodations = async () => {
  try {
    const response = await crmApi.get<Accommodation[]>('/accommodations');

    const accommodations = response.data.map((accommodation) => {
      return {
        ...accommodation,
        images: accommodation.images.map((image) =>
          JSON.parse(image.replace(/'/g, '"'))
        ),
      };
    });

    return accommodations;
  } catch (error) {
    console.error('Error fetching accommodations:', error);
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};
