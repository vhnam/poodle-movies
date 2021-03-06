import { APIs } from './types';
import { generateQueryString } from './utils/api';

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
    url: (
      mediaType: string,
      genreID: string,
      page: number,
      keywords?: string
    ) =>
      `/discover/${mediaType}${generateQueryString({
        with_genres: genreID,
        page,
        with_keywords: keywords,
      })}`,
    method: 'GET',
  },
  movie: {
    url: (movieID: string) => `/movie/${movieID}`,
    method: 'GET',
  },
  similarMovies: {
    url: (movieID: string) => `/movie/${movieID}/similar`,
    method: 'GET',
  },
  tv: {
    url: (tvID: string) => `/tv/${tvID}`,
    method: 'GET',
  },
  similarTVs: {
    url: (tvID: string) => `/tv/${tvID}/similar`,
    method: 'GET',
  },
};

const paths: Record<string, any> = {
  homepage: '/',
  genre: '/genres/:mediaType/:genreID',
  movie: '/movies/:movieID',
  tv: '/tvs/:tvID',
};

const config = {
  apis,
  paths,
};

export default config;
