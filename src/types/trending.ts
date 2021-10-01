export type Trend = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_name: string;
  original_title: string;
  poster_path: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  overview: string;
  release_date: string;
  name: string;
  title: string;
  id: number;
  popularity: number;
  media_type: string;
};

export type TrendingResponse = {
  page: number;
  results: Trend[];
  total_pages: number;
  total_results: number;
};
