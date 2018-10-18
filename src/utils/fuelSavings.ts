import { roundNumber } from './math';
import { getCurrencyFormattedNumber } from './numberFormat';
import { IFuelSavings } from '../models/interfaces/IFuelSavings';
import { ISavings } from '../models/interfaces/ISavings';

export default class FuelSavings implements IFuelSavings {
    public newMpg = 0
    public tradeMpg = 0;
    public newPpg = 0;
    public tradePpg = 0;
    public milesDriven = 0;
    public milesDrivenTimeframe = '';
    public displayResult = true;
    public dateModified = '';
    public necessaryDataIsProvidedToCalculateSavings = false;
    public savings = {} as ISavings;

    constructor(){

    }

    public static calculateMilesDrivenPerMonth(
        milesDriven,
        milesDrivenTimeframe
    ) {
        const monthsPerYear = 12;
        const weeksPerYear = 52;

        switch (milesDrivenTimeframe) {
            case 'week':
                return (milesDriven * weeksPerYear) / monthsPerYear;
            case 'month':
                return milesDriven;
            case 'year':
                return milesDriven / monthsPerYear;
            default:
                throw new Error(
                    `Unknown milesDrivenTimeframe passed: ${milesDrivenTimeframe}`
                );
        }
    }

    public static calculateSavingsPerMonth(settings) {
        if (!settings.milesDriven) {
            return 0;
        }

        const milesDrivenPerMonth = this.calculateMilesDrivenPerMonth(
            settings.milesDriven,
            settings.milesDrivenTimeframe
        );
        const tradeFuelCostPerMonth = this.calculateMonthlyCost(
            milesDrivenPerMonth,
            settings.tradePpg,
            settings.tradeMpg
        );
        const newFuelCostPerMonth = this.calculateMonthlyCost(
            milesDrivenPerMonth,
            settings.newPpg,
            settings.newMpg
        );
        const savingsPerMonth = tradeFuelCostPerMonth - newFuelCostPerMonth;

        return roundNumber(savingsPerMonth, 2);
    }

    public static necessaryDataIsProvidedToCalculateSavings(settings) {
        return (
            settings.newMpg > 0 &&
            settings.tradeMpg > 0 &&
            settings.newPpg > 0 &&
            settings.tradePpg > 0 &&
            settings.milesDriven > 0
        );
    }

    public static calculateSavings(settings) {
        const monthlySavings = this.calculateSavingsPerMonth(settings);

        return {
            monthly: getCurrencyFormattedNumber(monthlySavings),
            annual: getCurrencyFormattedNumber(monthlySavings * 12),
            threeYear: getCurrencyFormattedNumber(monthlySavings * 12 * 3)
        };
    }

    private static calculateMonthlyCost(milesDrivenPerMonth, ppg, mpg) {
        const gallonsUsedPerMonth = milesDrivenPerMonth / mpg;
        return gallonsUsedPerMonth * ppg;
    }
}