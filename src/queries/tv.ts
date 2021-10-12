import { useQuery } from 'react-query';

import config from '../config';
import { TV } from '../types';
import api from '../utils/api';

export const useTV = (tvID: string) =>
  useQuery(
    [`tv-${tvID}`],
    async (): Promise<TV> => {
      const { url, method } = config.apis.tv;
      const response = await api({
        url: url(tvID),
        method,
      });
      return response.data;
    },
    { keepPreviousData: true, staleTime: 5000 }
  );
