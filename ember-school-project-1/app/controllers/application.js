import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  actions: {
    makeUnavailable(food) {
      set(food, 'isAvailable', false)
      food.save();
    }
  }
});
