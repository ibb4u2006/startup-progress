import { AxiosResponse } from 'axios';
import axiosClient from './axios';
import { API_ROUTES } from '@/constants/routes';
import { RandomFactResponse } from '@/types/response';

export const getRandomFact = async (): Promise<
  AxiosResponse<RandomFactResponse>
> => {
  return await axiosClient.get(API_ROUTES.getRandomFact());
};
