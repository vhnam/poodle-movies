import { Method } from "axios";

type API = {
  url: any;
  method: Method;
};

export type APIs = Record<string, API>;
