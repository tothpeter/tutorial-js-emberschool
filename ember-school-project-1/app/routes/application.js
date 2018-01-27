import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    // return [
    //   { name: 'Tacos', available: true  },
    //   { name: 'Salad', available: true  },
    //   { name: 'Pizza', isAvailable: false }
    // ]

    return this.store.findAll('food');
  }
});
