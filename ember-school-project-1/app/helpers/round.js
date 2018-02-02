import { helper } from '@ember/component/helper';

export function round(params/*, hash*/) {
  let unroundedNumber = params[0];
  return Math.round(unroundedNumber * 100) / 100;
}

export default helper(round);
