export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: "alcove" | "panel_van" | "integrated" | "semi_integrated";
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: "automatic" | "manual";
  engine: "diesel" | "petrol" | "hybrid" | "electric";
  amenities: string[];
  description: string;
  coverImage: string;
  totalReviews: number;
  reviews?: Review[];
}

export interface Review {
  id: "string";
  camperId: "string";
  reviewer_name: "string";
  reviewer_rating: number;
  comment: "string";
  createdAt: "string";
}

export interface CamperList {
  campers: Camper[];
}

export interface CamperFilters {
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
  amenities?: string[];
}
