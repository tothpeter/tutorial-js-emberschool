import Route from '@ember/routing/route';

export default Route.extend({
  // same as default
  model(params) {
    return this.store.findRecord('food', params.food_id);
  }
});
