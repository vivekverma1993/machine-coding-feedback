import type { SplitStrategy } from "../interfaces/SplitStrategy.mts";
import { BalanceSheet } from "./BalanceSheet.mts";
import { EqualSplitStrategy } from "./Entities/Strategies/EqualSplitStrategy.mts";
import { User } from "./Entities/User.mts";
import { Expense } from "./Expense.mts";


class SplitwiseService {
    users: Map<string, User> = new Map();
    balanceSheet: BalanceSheet = new BalanceSheet();

    createUser(userId: string, name: string, email: string): User {
        const user = new User(userId, name, email);
        this.users.set(userId, user);
        return user;
    }

    // in order to support other split strategie we need to take splitData which 
    // will be a map like  Map<string, number>, also this will be optional
    handleExpense(description: string, amount: number, paidBy: string, involvedUserIds: string[], strategy: SplitStrategy): void {
        console.log(description);
        const paidByUser = this.users.get(paidBy)!;
        const involvedUsers = involvedUserIds.map(id => this.users.get(id)!);

        const splits = strategy.calculateSplits(involvedUsers, amount);
        const expense = new Expense(description, amount, paidByUser, splits);
        // we can store this expenses somewhere later

        this.balanceSheet.updateBalance(expense.getPaidBy(), expense.getSplits());
    }

    printBalances(): void {
        this.balanceSheet.getBalance();
    }

}

export { SplitwiseService };