import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  color: 'blue',
  rating: 0,
  percentage: computed('rating', function() {
    return this.get('rating') * 10;
  }),

  inputWidth: null,
  width: computed('inputWidth', function() {
    let inputWidth = this.get('inputWidth');

    return inputWidth ? `${inputWidth}px` : '100%';
  }),

// below ember 2.6 this could helo to solve the binding issue
}).reopenClass({
  positionalParams: [ 'rating', 'inputWidth' ]
});
