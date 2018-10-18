export function roundNumber(
    numberToRound: number,
    numberOfDecimalPlaces: number
): number {
    if (numberToRound === 0) {
        return 0;
    }

    // const scrubbedNumber = numberToRound.toString().replace('$', '').replace(',', '');
    return (
        Math.round(numberToRound * Math.pow(10, numberOfDecimalPlaces)) /
        Math.pow(10, numberOfDecimalPlaces)
    );
}

// adds array of numbers passed.
export function addArray(values: number[]): number {
    const total: number = values.reduce((previousValue, currentValue) => {
        return previousValue + convertToPennies(currentValue); // do math in pennies to assure accuracy.
    }, 0);

    return total / 100; // convert back into dollars
}

export function convertToPennies(value: number): number {
    if (value === 0) {
        return 0;
    }

    // let dollarValue: number = parseFloat(value);
    let dollarValue: number = roundNumber(value, 2); // round to 2 decimal places.
    const dollarValueContainsDecimal: boolean =
        dollarValue.toString().indexOf('.') !== -1;
    return dollarValueContainsDecimal
        ? parseInt(dollarValue.toString().replace('.', ''), 10)
        : dollarValue * 100;
}
