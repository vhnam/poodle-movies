import { concat } from 'ramda';

const capitalize = (str: string) =>
  concat(str.charAt(0).toUpperCase(), str.slice(1));

export default capitalize;
