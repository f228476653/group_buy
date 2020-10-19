import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './register.reducer';
import { alertReducer } from './alert.reducer';
import { profileReducer } from './profile.reducer';
import { getAllItemsReducer } from './items.reducer';



export const rootReducer = combineReducers({
  registration,
  alertReducer,
  authentication,
  profileReducer,
  getAllItemsReducer
});

