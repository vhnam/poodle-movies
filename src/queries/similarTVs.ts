import { useQuery } from 'react-query';

import config from '../config';
import { SimilarTVsResponse } from '../types';
import {api} from '../utils/api';

export const useSimilarTVs = (tvID: string) =>
  useQuery(
    [`similar-tv-${tvID}`],
    async (): Promise<SimilarTVsResponse> => {
      const { url, method } = config.apis.similarTVs;
      const response = await api({
        url: url(tvID),
        method,
      });
      return response.data;
    },
    { keepPreviousData: true, staleTime: 5000 }
  );
