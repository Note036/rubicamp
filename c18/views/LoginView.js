import { lines } from "../c18.js";

export function greeting(account) {
    lines()
    console.log(`Welcome, ${account.username}. Your access level is: ${account.status.toUpperCase()}`)
}