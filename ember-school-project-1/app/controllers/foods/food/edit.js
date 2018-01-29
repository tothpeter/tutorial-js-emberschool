import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save() {
      this.model.save();
      this.transitionToRoute('foods.food', this.model.id);
    }
  }
});
