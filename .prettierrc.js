/* 
    Options can be found here 
    https://prettier.io/docs/en/options.html
*/

module.exports = {
	useTabs: false, // Indent lines with tabs instead of spaces.
	printWidth: 80, // Specify the length of line that the printer will wrap on.
	tabWidth: 4, // Specify the number of spaces per indentation-level.
	singleQuote: true, // Use single quotes instead of double quotes.
	bracketSpacing: true, // Print spaces between brackets in object literals.
	/**
	 * Do not print semicolons, except at the beginning of lines which may need them.
	 * Valid options:
	 * - true - add a semicolon at the end of every line
	 * - false - only add semicolons at the beginning of lines that may introduce ASI failures
	 */
	semi: true,
	/**
	 * Print trailing commas wherever possible.
	 * Valid options:
	 *   - "none" - no trailing commas
	 *   - "es5" - trailing commas where valid in ES5 (objects, arrays, etc)
	 *   - "all" - trailing commas wherever possible (function arguments)
	 */
	trailingComma: 'none',
	/**
	 * Put the > of a multi-line JSX element at the end of the last line instead of
	 * being alone on the next line (does not apply to self closing elements).
	 */
	jsxBracketSameLine: false,
	/**
	 * Include parentheses around a sole arrow function parameter.
	 * Valid options:
	 *   - "avoid" - Omit parens when possible. Example: x => x
	 *   - "always" - Always include parens. Example: (x) => x
	 */
	arrowParens: 'avoid'
};
