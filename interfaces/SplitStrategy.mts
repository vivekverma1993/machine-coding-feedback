import type { Split } from "../classes/Entities/Split.mjs";
import type { User } from "../classes/Entities/User.mts";

export interface SplitStrategy {
    // added split data to take care of other strategies
    calculateSplits(users: User[], amount: number, splitData?: Map<string, number>): Split[];
}
