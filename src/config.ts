import { APIs } from "./types";

const apis: APIs = {
  getGenres: {
    url: (platform: string) => `/genre/${platform}/list`,
    method: "GET",
  },
  getTrending: {
    url: (mediaType: string, timeWindow: string) =>
      `/trending/${mediaType}/${timeWindow}`,
    method: "GET",
  },
};

const paths: Record<string, string> = {
  homepage: "/",
};

const config = {
  apis,
  paths,
};

export default config;
