import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save() {
      this.model.food.save();
      this.transitionToRoute('foods.food', this.model.food.id);
    },

    selectRestaurant(newlySelectedRestaurant, _componenet) {
      let food = this.model.food;

      food.get('restaurant').then((originallySelectedRestaurant) => {
        food.set('restaurant', newlySelectedRestaurant);
        newlySelectedRestaurant.save();
        originallySelectedRestaurant.save();
      });
    }
  }
});
