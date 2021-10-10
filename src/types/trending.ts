import { Media } from '.';

export type TrendingResponse = {
  page: number;
  results: Media[];
  total_pages: number;
  total_results: number;
};
