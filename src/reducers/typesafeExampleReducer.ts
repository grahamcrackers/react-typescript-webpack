import { ActionType, getType } from 'typesafe-actions';
import * as todos from '../actions/typesafeExampleActions';
import { Todo } from '../models/Todo';

export type TodosAction = ActionType<typeof todos>;

export default (state: Todo[] = [], action: TodosAction) => {
    switch (action.type) {
        case getType(todos.add):
            // below action type is narrowed to: { type: "todos/ADD"; payload: Todo; }
            return [...state, action.payload];

        default:
            return [...state];
    }
};
