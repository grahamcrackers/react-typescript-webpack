export default {
    fuelSavings: {
        newMpg: '',
        tradeMpg: '',
        newPpg: '',
        tradePpg: '',
        milesDriven: '',
        milesDrivenTimeframe: 'week',
        displayResults: false,
        dateModified: null,
        necessaryDataIsProvidedToCalculateSavings: false,
        savings: {
            monthly: 0,
            annual: 0,
            threeYear: 0
        }
    }
};

export const persistedState = {
    todos: [
        {
            id: '0',
            text: 'Welcome back!',
            completed: false
        }
    ]
};
