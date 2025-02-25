export interface Accommodation {
  accommodationid: number;
  slug: string;
  accommodation: string;
  introductions: {
    en: string;
    es: string;
  };
  images: string[];
  main_features: {
    VALUE: number;
    DYGAV_SPANISH: string;
  }[];
  capacity: number;
  categories: {
    category_id: number;
  }[];
}
