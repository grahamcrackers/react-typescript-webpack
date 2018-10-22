import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import typesafeExampleReducer from './typesafeExampleReducer';
import visibilityFilter from './visibilityFilterReducer';

const rootReducer = combineReducers({
  fuelSavings,
  todos: typesafeExampleReducer,
  visibilityFilter
});

export default rootReducer;