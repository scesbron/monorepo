import { concat } from 'lodash';

const test = () => {
  const array = [1];
  concat(array, 2, [3], [[4]]);
};

export default test;
