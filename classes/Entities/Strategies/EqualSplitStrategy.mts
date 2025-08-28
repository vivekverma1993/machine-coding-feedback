import type { SplitStrategy } from "../../../interfaces/SplitStrategy.mts";
import { Split } from "../Split.mts";
import type { User } from "../User.mts";

class EqualSplitStrategy implements SplitStrategy {
     addExpense(paidBy: string, amount: number, users: User[]): void {
        const contribution = amount/users.length;
        const splits: Split[] = [];
        for (let user in users) {
            const contributionSplit = new Split(user, contribution);
            splits.push(contributionSplit);
        }

        // call the balance Sheet method
     }
}


export {EqualSplitStrategy };
