import { action } from 'typesafe-actions';
import { ADD, TOGGLE } from '../constants';
import { string } from 'prop-types';

export const toggle = (id: string) => action(TOGGLE, id);
// (id: string) => { type: 'todos/TOGGLE'; payload: string; }

export const add = (title: string) => action(ADD, { title, id: string, completed: false } as Todo);