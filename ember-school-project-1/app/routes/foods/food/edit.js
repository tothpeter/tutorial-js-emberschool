import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  model(params) {
    return RSVP.hash({
      food: this.store.findRecord('food', params.food_id),
      restaurants: this.store.findAll('restaurant')
    });
  },

  afterModel({food}) {
    let currentUser = this.get('session.currentUser');

    if (!currentUser || food.get('restaurant.user.id') !== currentUser.get('id')) {
      this.transitionTo('foods.food', food.id);
    }
  }
});
