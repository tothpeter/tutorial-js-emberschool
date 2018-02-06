import Controller from '@ember/controller';

export default Controller.extend({
  session: Ember.inject.service(),

  actions: {
    register(displayName, email, password) {
      this.get('session').register(displayName, email, password).then(() => {
        this.get('flashMessages').success('You have successfully registered.');
        this.transitionToRoute('restaurants');
      }).catch((reason) => {
        this.get('flashMessages').danger('Some error happened: ' + reason);
      });
    }
  }
});
