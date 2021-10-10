import { atomWithQuery } from 'jotai/query';

import config from '../config';
import { Genres } from '../types';
import api from '../utils/api';

const movieListAtom = atomWithQuery(() => ({
  queryKey: 'movie-list',
  queryFn: async (): Promise<Genres> => {
    const { url, method } = config.apis.getGenres;
    const res = await api({
      url: url('movie'),
      method,
    });
    return res.data;
  },
}));

export default movieListAtom;
