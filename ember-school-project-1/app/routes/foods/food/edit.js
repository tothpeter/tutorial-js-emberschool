import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    return RSVP.hash({
      food: this.store.findRecord('food', params.food_id),
      restaurants: this.store.findAll('restaurant')
    });
  }
});
