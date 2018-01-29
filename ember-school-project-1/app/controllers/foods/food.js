import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    destroyItem() {
      if (confirm("Are you sure?")) {
        this.model.destroyRecord();
        this.transitionToRoute('foods');
      }
    }
  }
});
