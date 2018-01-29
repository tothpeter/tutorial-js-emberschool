import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('foods', function(){
    this.route('food', { path: ':food_id' });
  });
  this.route('about');
  this.route('contact');
  this.route('favorite-word', { path: 'favorite-word/:word' });
});

export default Router;
