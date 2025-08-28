import type { Split } from "./Entities/Split.mts";
import type { User } from "./Entities/User.mts";

class Expense {
    description: string;
    amount: number;
    paidBy: User;
    splits: Split[];
  
    constructor(
        description: string,
        amount: number,
        paidBy: User,
        splits: Split[]
    ) {
        this.description = description;
        this.amount = amount;
        this.paidBy = paidBy;
        this.splits = splits;
    }

    getSplits(): Split[] {
        return this.splits;
    }

    getPaidBy(): User {
        return this.paidBy;
    }

    getAmount(): number {
        return this.amount;
    }

    getDescription(): string {
        return this.description;
    }
}

export { Expense };