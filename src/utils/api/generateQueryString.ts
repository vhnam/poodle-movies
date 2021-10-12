import { map, join, pipe, filter, reject } from 'ramda';
import { isEmptyOrNil } from '../ramda';

const esc = encodeURIComponent;

const fn = reject(isEmptyOrNil);

const generateQueryString = (params: Record<string, any>) => {
  const generate = pipe(
    map((key: string) => esc(key) + '=' + esc(params[key])),
    filter((key: string) => {
      return key !== undefined;
    }),
    join('&')
  );

  return `?${generate(Object.keys(fn(params)))}`;
};

export default generateQueryString;
