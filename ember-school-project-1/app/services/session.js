import Service from '@ember/service';

export default Service.extend({
  cookies: Ember.inject.service(),
  store: Ember.inject.service(),

  currentUser: null,

  init() {
    this._super(...arguments);
    let currentUserId = this.get('cookies').read('currentUserId');

    if (currentUserId) {
      this.get('store').findRecord('user', currentUserId).then((user) => {
        this.set('currentUser', user);
      })

    }
  },

  login(user) {
    this.set('currentUser', user);
    this.get('cookies').write('currentUserId', user.id);
  },
  logout() {
    this.set('currentUser', null);
    this.get('cookies').clear('currentUserId');
  }
});
