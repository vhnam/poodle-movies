import { atomWithQuery } from 'jotai/query';

import config from '../config';
import { Genres } from '../types';
import {api} from '../utils/api';

const tvListAtom = atomWithQuery(() => ({
  queryKey: 'tv-list',
  queryFn: async (): Promise<Genres> => {
    const { url, method } = config.apis.getGenres;
    const res = await api({
      url: url('tv'),
      method,
    });
    return res.data;
  },
}));

export default tvListAtom;
