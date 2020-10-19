import { itemConstants } from '../constants/item.constants';

export function getAllItemsReducer(state = {}, action) {
  switch (action.type) {
    case itemConstants.ITEM_ALL_REQUEST:
      return {items: {}, sortby: action.sortby};
    case itemConstants.ITEM_ALL_SUCCESS:
      return {items: action.data};
    case itemConstants.ITEM_ALL_AILURE:
      return state;
    default:
      return state;
  }
}

