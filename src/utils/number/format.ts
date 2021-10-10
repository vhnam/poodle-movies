import { replace } from 'ramda';

const format = (num: number) =>
  replace(/\B(?=(\d{3})+(?!\d))/g, ',', num.toString());

export default format;
