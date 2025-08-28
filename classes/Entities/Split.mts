import { User } from "./User.mts"; 

class Split {
    user: User;
    amount: number;

    constructor(user: User, amount: number) {
        this.user = user;
        this.amount = amount;
    }

    getUser(): User {
        return this.user;
    }

    getAmount(): number {
        return this.amount;
    }
}

export { Split };

