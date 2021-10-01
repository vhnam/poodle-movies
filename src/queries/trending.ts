import { useQuery } from "react-query";

import config from "../config";
import { TrendingResponse } from "../types";
import api from "../utils/api";

export const useTrending = () =>
  useQuery(["trending"], async (): Promise<TrendingResponse> => {
    const { url, method } = config.apis.getTrending;
    const response = await api({ url: url("all", "week"), method });
    return response.data;
  });
