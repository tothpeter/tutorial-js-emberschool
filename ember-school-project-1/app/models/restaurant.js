import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: attr('string'),
  foods: hasMany(),
  helathRatings: computed.mapBy('foods', 'health'),
  maxHealth: computed.max('helathRatings'),
  // maxHealth: computed('foods.@each.health', function() {
  //   let helathRatings = this.get('foods').map(function(food) {
  //     return food.get('health');
  //   });
  //
  //   return Math.max(...helathRatings);
  // })
});
