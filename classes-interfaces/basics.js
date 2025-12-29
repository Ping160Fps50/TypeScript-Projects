"use strict";
// class User {
//   name: string;
//   age: number;
Object.defineProperty(exports, "__esModule", { value: true });
//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }
// }
class User {
    name;
    age;
    hobbies = [];
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(this.age);
    }
}
const alireza = new User("Alireza", 25);
// alireza.hobbies = [];  readonly
alireza.hobbies.push("Game");
//# sourceMappingURL=basics.js.map