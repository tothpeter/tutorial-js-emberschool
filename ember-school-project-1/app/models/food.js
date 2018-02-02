import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: attr('string'),
  imageUrl: attr('string'),
  description: attr('string'),
  isAvailable: attr('boolean'),

  restaurant: belongsTo(),
  course: attr('string'),

  excitedName: computed('name', 'isAvailable', function() {
    let exclaim = this.get('name') + '!!!!';

    if (!this.get('isAvailable')) {
      exclaim += " but it's not awailable..."
    }

    return exclaim;
  })
});
