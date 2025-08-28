import type { Split } from "./Entities/Split.mts";
import type { User } from "./Entities/User.mts";


class BalanceSheet {
    balances: Map<string, Map<string, number>> = new Map();

    updateBalance(paidBy: User, splits: Split[]): void {
        for (const split of splits) {
            const user = split.getUser();
            if (user.getUserId() === paidBy.getUserId()) continue;
            this.addBalance(user.getUserId(), paidBy.getUserId(), split.getAmount());
        }
    }

    addBalance(from: string, to: string, amount: number): void {
        if (!this.balances.has(from)) this.balances.set(from, new Map());
        if (!this.balances.has(to)) this.balances.set(to, new Map());

        const fromMap = this.balances.get(from)!;
        const toMap = this.balances.get(to)!;

        fromMap.set(to, (fromMap.get(to) || 0) - amount);
        toMap.set(from, (toMap.get(from) || 0) + amount);

        console.log(this.balances);
    }

    getBalance(): void {
        for (const [user, owes] of this.balances.entries()) {
            for (const [other, amount] of owes.entries()) {
                if (amount < 0) {
                    console.log(`${user} owes ${other}: ${-amount}`);
                }
            }
        }
    }
}

export { BalanceSheet };