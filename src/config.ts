import { APIs } from './types';

const apis: APIs = {
  getGenres: {
    url: (platform: string) => `/genre/${platform}/list`,
    method: 'GET',
  },
  getTrending: {
    url: (mediaType: string, timeWindow: string) =>
      `/trending/${mediaType}/${timeWindow}`,
    method: 'GET',
  },
  discover: {
    url: (mediaType: string, genreID: string, page: number) =>
      `/discover/${mediaType}?with_genres=${genreID}&page=${page}`,
    method: 'GET',
  },
};

const paths: Record<string, any> = {
  homepage: '/',
  genre: '/genre/:mediaType/:genreID',
};

const config = {
  apis,
  paths,
};

export default config;
