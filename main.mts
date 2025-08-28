import { EqualSplitStrategy } from "./classes/Entities/Strategies/EqualSplitStrategy.mts";
import { SplitwiseService } from "./classes/SplitwiseService.mts";

function main(): void {
    const splitService = new SplitwiseService();
    splitService.createUser("u1", "User 1", "");
    splitService.createUser("u2", "User 2", "");
    splitService.createUser("u3", "User 3", "");
    splitService.createUser("u4", "User 4", "");

    splitService.handleExpense("Dinner", 1000, "u1", ["u1", "u2", "u3", "u4"], new EqualSplitStrategy());
    splitService.printBalances();

    splitService.handleExpense("BreakFast", 300, "u1", ["u2", "u3", "u4"], new EqualSplitStrategy());
    splitService.printBalances();
}


main();