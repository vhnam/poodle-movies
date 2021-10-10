import { useQuery } from 'react-query';

import config from '../config';
import { DiscoverResponse } from '../types';
import api from '../utils/api';

export const useGenre = (mediaType: string, genreID: string, page: number) =>
  useQuery(
    [`genre-${mediaType}-${genreID}`, page],
    async (): Promise<DiscoverResponse> => {
      const { url, method } = config.apis.discover;
      const response = await api({
        url: url(mediaType, genreID, page),
        method,
      });
      return response.data;
    },
    { keepPreviousData: true, staleTime: 5000 }
  );
