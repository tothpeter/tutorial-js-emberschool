import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  actions: {
    login(email, password) {
      this.get('session').login(email, password).then(() => {
        this.get('flashMessages').success('You have successfully signed in.');
        this.transitionToRoute('restaurants');
      }).catch(() => {
        this.get('flashMessages').danger('Login has failed');
      });
    }
  }
});
