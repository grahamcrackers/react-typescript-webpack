/*
    When using string constants for action type, please be sure to use simple string literals.
    Don't use string concatenation, template strings or object map because your type will lose the type information,
    widening to it's supertype string (this is how TypeScript works).
*/

export const SAVE_FUEL_SAVINGS: string = 'SAVE_FUEL_SAVINGS';
export const CALCULATE_FUEL_SAVINGS: string = 'CALCULATE_FUEL_SAVINGS';

export const ADD = '@prefix/ADD'; // type literal => '@prefix/ADD'
export const TOGGLE = '@prefix/TOGGLE'; // type literal => '@prefix/TOGGLE'
