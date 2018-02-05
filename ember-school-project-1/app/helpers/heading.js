import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function heading([text, level = 1]/*, hash*/) {
  return htmlSafe(`<h${level}>${text}</h${level}>`);
}

export default helper(heading);
