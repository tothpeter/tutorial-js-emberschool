import Controller from '@ember/controller';

export default Controller.extend({
  session: Ember.inject.service(),
  actions: {
    login(user) {
      this.get('session').login(user);
    }
  }
});
