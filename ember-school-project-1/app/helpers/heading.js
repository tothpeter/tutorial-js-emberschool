import { helper } from '@ember/component/helper';

export function heading([text, level = 1]/*, hash*/) {
  return Ember.String.htmlSafe(`<h${level}>${text}</h${level}>`);
}

export default helper(heading);
