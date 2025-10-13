import axios from "axios";
import type { AxiosInstance } from "axios"; 

const API_URL = import.meta.env.VITE_API_URL as string;

export type ServiceType = "apiUrl"; 

export const getAxiosInstance = (service: ServiceType): AxiosInstance => {
  const baseUrls: Record<ServiceType, string> = {
    apiUrl: API_URL,
  };

  return axios.create({
    baseURL: baseUrls[service],
  });
}; 
