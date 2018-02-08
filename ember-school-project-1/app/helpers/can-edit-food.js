import { helper } from '@ember/component/helper';

export function canEditFood([food, user]/*, hash*/) {
  return user && food.get('restaurant.user.id') === user.get('id');
}

export default helper(canEditFood);
