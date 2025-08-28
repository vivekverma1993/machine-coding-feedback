
class User {
    userId: string;
    name: string;
    email: string;

    constructor(userId: string, name: string, email: string) {
        this.userId = userId;
        this.name = name;
        this.email = email;
    }

    getUserId(): string {
        return this.userId;
    }

    getUserEmai(): string {
        return this.email;
    }
}

export { User };