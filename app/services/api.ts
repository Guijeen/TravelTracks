import axios from "axios";
import { Camper, CamperFilters } from "@/app/types/camper";

interface getCampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}

interface getCampersParams {
  page?: number;
  limit?: number;
  filters?: CamperFilters;
}

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

function cleanEmptyFilters(params: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(params).filter(([, filterValue]) => {
      if (
        filterValue === "" ||
        filterValue === undefined ||
        filterValue === null
      )
        return false;
      if (Array.isArray(filterValue) && filterValue.length === 0) return false;
      return true;
    }),
  );
}

export const getCampers = async ({
  page = 1,
  limit = 4,
  filters = {},
}: getCampersParams): Promise<getCampersResponse> => {
  const response = await api.get<getCampersResponse>("/campers", {
    params: cleanEmptyFilters({ page, perPage: limit, ...filters }),
  });
  return response.data;
};
