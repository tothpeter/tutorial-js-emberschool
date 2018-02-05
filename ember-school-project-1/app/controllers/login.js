import Controller from '@ember/controller';

export default Controller.extend({
  session: Ember.inject.service(),
  actions: {
    login(email, password) {
      this.get('session').login(email, password).then(() => {
        this.transitionToRoute('restaurants');
      }).catch(() => {
        alert('Login has failed');
      });
    }
  }
});
