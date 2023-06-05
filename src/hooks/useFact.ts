import { getRandomFact } from '@/api/fact';
import { GET_RANDOM_FACT_QUERY } from '@/constants/queries';
import { RandomFactResponse } from '@/types/response';
import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

export const useGetRandomFact = (enabled: boolean) => {
  return useQuery<AxiosResponse<RandomFactResponse>, AxiosError>(
    [GET_RANDOM_FACT_QUERY],
    async () => await getRandomFact(),
    { refetchOnWindowFocus: false, enabled }
  );
};
