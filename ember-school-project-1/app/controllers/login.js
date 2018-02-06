import Controller from '@ember/controller';

export default Controller.extend({
  session: Ember.inject.service(),
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
