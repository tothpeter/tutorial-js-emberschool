import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  actions: {
    sellRestaurant(restaurant) {
      let user = this.get('session.currentUser');

      user.get('restaurants').removeObject(restaurant);

      restaurant.save().then(() => {
        user.save();
      })
    },

    buyRestaurant(restaurant) {
      let user = this.get('session.currentUser');

      user.get('restaurants').addObject(restaurant);

      restaurant.save().then(() => {
        user.save();
      })
    }
  }
});
