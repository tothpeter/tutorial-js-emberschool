import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
    register(displayName, email, password) {
      this.get('flashMessages').clearMessages();

      this.get('session').register(displayName, email, password).then(() => {
        this.get('flashMessages').success('You have successfully registered.');
        this.transitionToRoute('restaurants');
      }).catch((errors) => {
        if (!Ember.isArray(errors)) {
          errors = [ errors ];
        }

        errors.forEach((error) => {
          let message = ""

          if (error.attribute) {
            message += `Error on ${error.attribute}: `;
          }

          message += error.message;

          this.get('flashMessages').danger(message, {sticky: true});
        });

      });
    }
  }
});
