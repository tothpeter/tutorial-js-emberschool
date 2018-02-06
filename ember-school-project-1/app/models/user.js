import DS from 'ember-data';
import attr from 'ember-data/attr';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  displayName: validator('presence', true),
});

export default DS.Model.extend(Validations, {
  displayName: attr('string'),
  email: attr('string'),
  password: attr('string')
});
