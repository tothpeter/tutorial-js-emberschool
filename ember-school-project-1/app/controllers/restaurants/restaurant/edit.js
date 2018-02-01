import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save() {
      this.model.save();
      this.transitionToRoute('restaurants.restaurant', this.model.id);
    },

    removeFood(food) {
      let restaurant = this.model;

      restaurant.get('foods').removeObject(food);

      food.save().then(() => {
        restaurant.save()
      });
    }
  }
});
