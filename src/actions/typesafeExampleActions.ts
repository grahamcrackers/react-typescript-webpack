import { action, createAction } from 'typesafe-actions';
import { ADD, TOGGLE } from '../constants';
import * as cuid from 'cuid';
import { Todo } from '../models/Todo';

// For existing actions, can be easy to convert
// export const toggle = (id: string) => action(TOGGLE, id);
// (id: string) => { type: 'todos/TOGGLE'; payload: string; }

// export const add = (title: string) => action(ADD, { title, id: string, completed: false } as Todo);
// (title: string) => { type: 'todos/ADD'; payload: Todo; }
/**
 * Option 3
 */
export const toggle = createAction('todos/TOGGLE', resolve => {
    return (id: string) => (resolve(id));
});
// (id: string) => { type: 'todos/TOGGLE'; payload: string; }

export const add = createAction('todos/ADD', resolve => {
    return (title: string) =>
        resolve({ title, id: cuid(), completed: false } as Todo);
});
// (title: string) => { type: 'todos/ADD'; payload: Todo; }
