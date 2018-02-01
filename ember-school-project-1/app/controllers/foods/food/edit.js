import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save() {
      this.model.food.save();
      this.transitionToRoute('foods.food', this.model.food.id);
    }
  }
});
