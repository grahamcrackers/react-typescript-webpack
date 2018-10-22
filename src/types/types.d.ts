// types.d.ts
// example of including `react-router` actions in `RootAction`
import { RouterAction, LocationChangeAction } from 'react-router-redux';
import { TodosAction } from '../reducers/todoReducer';
type ReactRouterAction = RouterAction | LocationChangeAction;


export type RootAction =
  | ReactRouterAction
  | TodosAction;