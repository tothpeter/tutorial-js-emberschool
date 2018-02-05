import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: attr('string'),
  imageUrl: attr('string'),
  description: attr('string'),
  isAvailable: attr('boolean'),

  restaurant: belongsTo(),
  course: attr('string'),

  health: attr('number'),

  excitedName: computed('name', 'isAvailable', function() {
    let exclaim = this.get('name') + '!!!!';

    if (!this.get('isAvailable')) {
      exclaim += " but it's not awailable..."
    }

    return exclaim;
  })
});
