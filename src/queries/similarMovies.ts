import { useQuery } from 'react-query';

import config from '../config';
import { SimilarMoviesResponse } from '../types';
import {api} from '../utils/api';

export const useSimilarMovies = (movieID: string) =>
  useQuery(
    [`similar-movie-${movieID}`],
    async (): Promise<SimilarMoviesResponse> => {
      const { url, method } = config.apis.similarMovies;
      const response = await api({
        url: url(movieID),
        method,
      });
      return response.data;
    },
    { keepPreviousData: true, staleTime: 5000 }
  );
