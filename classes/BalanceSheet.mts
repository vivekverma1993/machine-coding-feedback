import type { Split } from "./Entities/Split.mts";


class BalanceSheet {
    balances: Map<string, Map<string, number>> = new Map();

    addBalance(paidBy: string, splits:Split[]): void {
        if (!this.balances.has(paidBy)) {
            this.balances.set(paidBy, new Map());
        }
        const fromBalance = this.balances.get(paidBy)!;

        for(let split in splits) {
            const to = split.getUserId();
            if (!this.balances.has(to)) {
                this.balances.set(to, new Map());
            }
            const toBalance = this.balances.get(to)!;

            fromBalance.set(to, split.getAmount());
            toBalance.set(paidBy, -split.getAmount());
        }
    }

    getBalance(): void {
        for (let fromUsermap in this.balances.entries()) {
            const fromUserId =  fromUsermap[0];
            for (let toUserId in fromUsermap[1]) {

            }
        }
    }
}

export { BalanceSheet };