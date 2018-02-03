import { helper } from '@ember/component/helper';

export function ratingBar([rating, inputWidth]/*, hash*/) {
  let percentage = rating * 10;
  let width = inputWidth ? `${inputWidth}px` : '100%'

  return Ember.String.htmlSafe(`
    <div class="rating-bar" width="${width}">
    	<span class="inner-bar" style="width: ${percentage}%"></span>
    </div>
  `);
}



export default helper(ratingBar);
