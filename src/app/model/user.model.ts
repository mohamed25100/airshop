import { preserveWhitespacesDefault } from "@angular/compiler";

export class User {
    userName: string = "user";
    password: string = "1234";

    constructor(userName: string, password: string) {
        this.userName = userName;
        this.password = password;
    }
}
