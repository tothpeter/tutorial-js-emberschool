import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function ratingBar([rating, inputWidth], { color = 'blue' }) {
  let percentage = rating * 10;
  let width = inputWidth ? `${inputWidth}px` : '100%'

  return htmlSafe(`
    <div class="rating-bar" width="${width}">
    	<span class="inner-bar" style="width: ${percentage}%; background-color: ${color};"></span>
    </div>
  `);
}

export default helper(ratingBar);
