"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let names = ["Alireza", "Arshia", "Mamad"];
let store = {};
store.name = "Alireza";
store.admin = "Admin";
let nameStore = {};
function merge(a, b) {
    return [a, b];
}
const ids = merge(1, 2);
const mergeNames = merge("Alireza", "Mamad");
function mergeDiffer(a, b) {
    // different types
    return [a, b];
}
const idsDiffer = mergeDiffer(1, "Alireza");
const mergeNamesDiffer = mergeDiffer("Alireza", 2);
function mergeObj(a, b) {
    return { ...a, ...b };
}
let merged = mergeObj({ name: "Alireza" }, { age: 25 });
class User {
    id;
    constructor(id) {
        this.id = id;
    }
}
let aliId = new User("id1");
//# sourceMappingURL=generics.js.map