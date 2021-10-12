import { useQuery } from 'react-query';

import config from '../config';
import { DiscoverResponse } from '../types';
import { api } from '../utils/api';

export const useGenre = (
  mediaType: string,
  genreID: string,
  page: number,
  keywords?: string
) =>
  useQuery(
    [`genre-${mediaType}-${genreID}`, page, keywords],
    async (): Promise<DiscoverResponse> => {
      console.log(keywords);
      const { url, method } = config.apis.discover;
      const response = await api({
        url: url(mediaType, genreID, page, keywords),
        method,
      });
      return response.data;
    },
    { keepPreviousData: true, staleTime: 5000 }
  );
