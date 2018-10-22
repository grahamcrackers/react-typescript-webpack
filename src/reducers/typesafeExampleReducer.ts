import { ActionType, getType } from 'typesafe-actions';
import * as todos from '../actions/typesafeExampleActions';
import { ITodo } from '../models/interfaces/ITodo';

export type TodosAction = ActionType<typeof todos>;

export default (state: ITodo[] = [] as ITodo[], action: TodosAction) => {
    switch (action.type) {
        case getType(todos.addTodo):
            // below action type is narrowed to: { type: "todos/ADD"; payload: Todo; }
            return [...state, action.payload];

        case getType(todos.toggle):
            return [...state, action.payload];

        default:
            return [...state];
    }
};
