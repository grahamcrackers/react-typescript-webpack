import * as React from 'react';
import { ISavings } from '../models/interfaces/ISavings';
import { scrubFormatting } from '../utils/numberFormat';

interface FuelSavingsResultsProps {
    savings: ISavings;
}

const FuelSavingsResults: React.SFC<FuelSavingsResultsProps> = ({
    savings
}) => {
    const savingsMonthlyString = savings.monthly.toString();
    const savingsExist = scrubFormatting(savingsMonthlyString) > 0;
    const savingsClass = savingsExist ? 'savings' : 'loss';
    const resultLabel = savingsExist ? 'Savings' : 'Loss';

    return (
        <table>
            <tbody>
                <tr>
                    <td className="fuel-savings-label">{resultLabel}</td>
                    <td>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Monthly</td>
                                    <td>1 Year</td>
                                    <td>3 Year</td>
                                </tr>
                                <tr>
                                    <td className={savingsClass}>
                                        {savings.monthly}
                                    </td>
                                    <td className={savingsClass}>
                                        {savings.annual}
                                    </td>
                                    <td className={savingsClass}>
                                        {savings.threeYear}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default FuelSavingsResults;
