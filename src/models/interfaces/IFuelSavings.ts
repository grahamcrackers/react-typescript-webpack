import { ISavings } from "./ISavings";

export interface IFuelSavings {
    newMpg: number;
    tradeMpg: number;
    newPpg: number;
    tradePpg: number;
    milesDriven: number;
    milesDrivenTimeframe: string;
    displayResult: boolean;
    dateModified: string;
    necessaryDataIsProvidedToCalculateSavings: boolean;
    savings: ISavings;
  };