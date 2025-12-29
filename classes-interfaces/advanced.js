"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetterUser {
    firsName;
    lastName;
    constructor(firsName, lastName) {
        this.firsName = firsName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firsName + " " + this.lastName;
    }
}
const alireza = new GetterUser("Alireza", "Shahnazari");
console.log(alireza.fullName);
class SetterUser {
    _firsName = "";
    _lastName = "";
    set firstName(name) {
        if (name.trim() === "")
            throw new Error("Invalid First Name");
        this._firsName = name;
    }
    set lastName(name) {
        if (name.trim() === "")
            throw new Error("Invalid Last Name");
        this._lastName = name;
    }
    get fullName() {
        return this._firsName + " " + this._lastName;
    }
    static eid = "User";
    static greet() {
        console.log("Hello World!");
    }
}
const newAlireza = new SetterUser();
newAlireza.firstName = "Alireza";
newAlireza.lastName = "Shahnazari";
console.log(newAlireza.fullName);
console.log(SetterUser.eid);
console.log(SetterUser.greet());
class Employiee extends SetterUser {
    job;
    constructor(job) {
        super();
        this.job = job;
        super.firstName = "Alireza";
    }
    work() {
        this._firsName = this.firstName;
    }
}
class UiElement {
    identifier;
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone() {
        //...
    }
}
class SideDrawerElement extends UiElement {
    identifier;
    position;
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
}
//# sourceMappingURL=advanced.js.map