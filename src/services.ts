import { Injectable } from "@nestjs/common";

@Injectable()
export class DataService {
    constructor() {
        console.log("INITIATING DATA SERVICE")
    }
}

@Injectable()
export class AuthService {
    constructor() {
        console.log("INITIATING AUTH SERVICE")
    }
}