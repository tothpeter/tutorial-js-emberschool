import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  name: attr('string'),
  imageUrl: attr('string'),
  description: attr('string'),
  isAvailable: attr('boolean')
});
