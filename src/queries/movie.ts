import { useQuery } from 'react-query';

import config from '../config';
import { Movie } from '../types';
import {api} from '../utils/api';

export const useMovie = (movieID: string) =>
  useQuery(
    [`movie-${movieID}`],
    async (): Promise<Movie> => {
      const { url, method } = config.apis.movie;
      const response = await api({
        url: url(movieID),
        method,
      });
      return response.data;
    },
    { keepPreviousData: true, staleTime: 5000 }
  );
