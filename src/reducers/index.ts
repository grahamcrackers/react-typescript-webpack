import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import todos from './todoReducer';
import visibilityFilter from './visibilityFilterReducer';

const rootReducer = combineReducers({
  fuelSavings,
  todos,
  visibilityFilter
});

export default rootReducer;