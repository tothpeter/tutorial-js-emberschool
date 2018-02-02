import Controller from '@ember/controller';
import { set, computed } from '@ember/object';

export default Controller.extend({
  menuLength: computed.alias('model.length'),
  availableItems: computed.filterBy('model', 'isAvailable', true),
  // availableItems: computed('model.@each.isAvailable', function() {
  //   return this.get('model').filterBy('isAvailable', true);
  // }),
  actions: {
    saveNewItem() {
      this.store.createRecord('food', { name: this.get('newItem') }).save();
      this.set('newItem', '');
    }
  }
});
