import { helper } from '@ember/component/helper';

export function round(params/*, hash*/) {
  let unroundedNumber = params[0];
  let roundDecimal = params[1] || 0;
  let powerOfTen = Math.pow(10, roundDecimal);

  return Math.round(unroundedNumber * powerOfTen) / powerOfTen;
}

export default helper(round);
