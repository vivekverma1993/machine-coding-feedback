import type { SplitStrategy } from "../interfaces/SplitStrategy.mts";
import { BalanceSheet } from "./BalanceSheet.mts";
import { EqualSplitStrategy } from "./Entities/Strategies/EqualSplitStrategy.mjs";
import { User } from "./Entities/User.mts";


class SplitwiseService {
    users: User[] = [];
    balanceSheet: BalanceSheet;

    handleExpense(paidBy: string, amount: number, participants: User[], splitStrategy: SplitStrategy) {
	    splitStrategy.addExpense(paidBy, amount, participants);
    }

}

function main(): void {
    const user1 = new User('u1', 'u1', '');
    const user2 = new User('u2', 'u2', '');
    const user3 = new User('u3', 'u3', '');
    const user4 = new User('u4', 'u4', '');

    const amount = 1000;
    const ss: SplitStrategy = new EqualSplitStrategy();
    const paidBy = user1.getUserId();

    const splitService = new SplitwiseService();
    splitService.handleExpense(paidBy, amount, [user1, user2, user3, user4],ss);
}