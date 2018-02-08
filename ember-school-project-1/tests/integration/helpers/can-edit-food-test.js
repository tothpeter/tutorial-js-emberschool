import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('can-edit-food', 'helper:can-edit-food', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{can-edit-food inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});
