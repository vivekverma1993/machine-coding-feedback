import type { User } from "../classes/Entities/User.mjs";

export interface SplitStrategy {
    addExpense(paidBy: string, amount: number, users: User[]): void;
}
