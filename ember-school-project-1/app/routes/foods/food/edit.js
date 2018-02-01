import Route from '@ember/routing/route';
import { hash as RSVPHash } from 'rsvp';

export default Route.extend({
  model(params) {
    return RSVPHash({
      food: this.store.findRecord('food', params.food_id),
      restaurants: this.store.findAll('restaurant')
    });
  }
});
