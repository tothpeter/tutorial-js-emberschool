import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
    destroyItem() {
      if (confirm("Are you sure?")) {
        this.model.destroyRecord();
        this.transitionToRoute('foods');
      }
    }
  }
});
