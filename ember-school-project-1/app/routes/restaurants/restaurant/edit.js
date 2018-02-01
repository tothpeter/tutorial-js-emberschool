import Route from '@ember/routing/route';
import { hash as RSVPHash } from 'rsvp';

export default Route.extend({
  model(params) {
    return RSVPHash({
      restaurant: this.store.findRecord('restaurant', params.restaurant_id),
      foods: this.store.findAll('food')
    });
  }
});
