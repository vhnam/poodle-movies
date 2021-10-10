import { Media } from '.';

export type DiscoverResponse = {
  page: number;
  results: Media[];
  total_pages: number;
  total_results: number;
};
