import DS from 'ember-data';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: attr('string'),
  foods: hasMany(),

  avgHealth: computed('foods.@each.health', function() {
    let totalHealth   = this.get('totalHealth'),
        numberOfFoods = this.get('foods.length');

    return totalHealth / numberOfFoods;
  }),

  totalHealth: computed.sum('helathRatings'),
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
