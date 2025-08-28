import { User } from "./User.mts"; 

class Split {
    userId: string;
    amount: number;

    constructor(userId: string, amount: number) {
        this.userId = userId;
        this.amount = amount;
    }

    getUserId(): string {
        return this.userId;
    }

    getAmount(): number {
        return this.amount;
    }
}

export { Split };

