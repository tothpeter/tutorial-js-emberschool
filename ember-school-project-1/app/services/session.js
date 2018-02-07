import Service from '@ember/service';

export default Service.extend({
  cookies: Ember.inject.service(),
  store: Ember.inject.service(),
  firebase: Ember.inject.service('firebaseApp'),

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
    let auth = this.get('firebase').auth();

    return auth.signInWithEmailAndPassword(email, password).then((firebaseUser) => {
      this.get('store').findRecord('user', firebaseUser.uid).then((user) => {
        this.loginWithUser(user);
      });
    });
  },

  loginWithUser(user) {
    this.set('currentUser', user);
    this.get('cookies').write('currentUserId', user.id);
  },

  logout() {
    this.set('currentUser', null);
    this.get('cookies').clear('currentUserId');

    let auth = this.get('firebase').auth();
    auth.signOut();
  },

  register(displayName, email, password) {
    let auth = this.get('firebase').auth();

    return this.get('store')
        .createRecord('user', { displayName, email })
        .validate()
        .then(({model, validations}) => {
          if (validations.get('isValid')) {
            return auth.createUserWithEmailAndPassword(email, password).then((firebaseUser) => {
              model.set('id', firebaseUser.uid);
              return model.save();
            });
          } else {
            return Ember.RSVP.reject(validations.get('errors'));
          }
        })
        .then((user) => {
          return this.loginWithUser(user);
        });
  }
});
