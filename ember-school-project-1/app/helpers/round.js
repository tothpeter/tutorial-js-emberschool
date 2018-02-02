import { helper } from '@ember/component/helper';

export function round([unroundedNumber, roundDecimal = 0]/*, hash*/) {
  let powerOfTen = Math.pow(10, roundDecimal);

  return Math.round(unroundedNumber * powerOfTen) / powerOfTen;
}

export default helper(round);
