import Component from '@ember/component';

export default Component.extend({
  isOpen: false,

  actions: {
    toggleAvailability(food) {
      food.toggleProperty('isAvailable');
      food.save();
    },

    toggleOpen() {
      this.toggleProperty('isOpen');
    }
  }
});
