import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  displayName: attr('string'),
  email: attr('string'),
  password: attr('string')
});
