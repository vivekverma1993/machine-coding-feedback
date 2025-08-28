import type { SplitStrategy } from "../../../interfaces/SplitStrategy.mts";
import { Split } from "../Split.mts";
import type { User } from "../User.mts";

class EqualSplitStrategy implements SplitStrategy {
    calculateSplits(users: User[], amount: number): Split[] {
        const contribution = amount/users.length;
        return users.map(u => new Split(u, contribution));
    }
}


export {EqualSplitStrategy };
