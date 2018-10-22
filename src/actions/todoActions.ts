import { action, createAction } from 'typesafe-actions';

import * as cuid from 'cuid';
import { ITodo } from '../models/interfaces/ITodo';

// For existing actions, can be easy to convert
// export const toggle = (id: string) => action(TOGGLE, id);
// (id: string) => { type: 'todos/TOGGLE'; payload: string; }

// export const add = (title: string) => action(ADD, { title, id: string, completed: false } as Todo);
// (title: string) => { type: 'todos/ADD'; payload: Todo; }
/**
 * Option 3
 */
export const toggle = createAction('todos/TOGGLE', resolve => {
    return (id: string) => {
        return resolve(id);
    };
});
// (id: string) => { type: 'todos/TOGGLE'; payload: string; }

export const addTodo = createAction('todos/ADD', resolve => {
    return (todo: string) => {

        // return resolve({ title, id: cuid(), completed: false } as ITodo);
        return resolve({ title: '', text: todo, id: cuid(), completed: false } as ITodo);
    };
});
// (title: string) => { type: 'todos/ADD'; payload: Todo; }

export const setVisibilityFilter = createAction('todos/SET_VISIBILITY_FILTER', resolve => {
    return (filter: string) => {
        return resolve(filter);
    };
});