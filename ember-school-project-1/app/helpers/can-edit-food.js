import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default Helper.extend({
  session: service(),

  compute([food]/*, hash*/) {
    let currentUser = this.get('session.currentUser');

    return currentUser && food.get('restaurant.user.id') === currentUser.get('id');
  }
});
