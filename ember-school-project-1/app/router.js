import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('foods', function(){
    this.route('food', { path: ':food_id' }, function() {
      this.route('edit');
    });
    this.route('food.edit', { path: ':food_id/edit' });
  });
  this.route('about');
  this.route('contact');
  this.route('favorite-word', { path: 'favorite-word/:word' });
  this.route('restaurants', function() {
    this.route('restaurant', { path: ':restaurant_id' });
    this.route('restaurant.edit', { path: ':restaurant_id/edit' });
  });
  this.route('login');
  this.route('register');
  this.route('me');
});

export default Router;
