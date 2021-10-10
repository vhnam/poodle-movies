import { either, isEmpty, isNil } from "ramda";

const isEmptyOrNil = either(isEmpty, isNil);

export default isEmptyOrNil;
