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

  login(email, password) {
    return this.get('store').query('user', { orderBy: 'email', equalTo: email }).then((users) => {
      let user = users.objectAt(0);

      if (user && user.get('password') === password) {
        this.loginWithUser(user);
      } else {
        return Ember.RSVP.reject();
      }
    });
  },

  loginWithUser(user) {
    this.set('currentUser', user);
    this.get('cookies').write('currentUserId', user.id);
  },

  logout() {
    this.set('currentUser', null);
    this.get('cookies').clear('currentUserId');
  },

  register(displayName, email, password) {
    return this.get('store')
        .createRecord('user', { displayName, email, password })
        .save()
        .then((user) => {
          this.loginWithUser(user);
        });
  }
});
