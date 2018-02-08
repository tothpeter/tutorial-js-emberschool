import Component from '@ember/component';

export default Component.extend({
  actions: {
    toggleAvailability(food) {
      food.toggleProperty('isAvailable');
      food.save();
    }
  }
});
