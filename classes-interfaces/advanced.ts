class GetterUser {
  constructor(private firsName: string, private lastName: string) {}

  get fullName() {
    return this.firsName + " " + this.lastName;
  }
}

const alireza = new GetterUser("Alireza", "Shahnazari");

console.log(alireza.fullName);

class SetterUser {
  protected _firsName: string = "";
  private _lastName: string = "";

  set firstName(name: string) {
    if (name.trim() === "") throw new Error("Invalid First Name");
    this._firsName = name;
  }

  set lastName(name: string) {
    if (name.trim() === "") throw new Error("Invalid Last Name");
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
  constructor(public job: string) {
    super();
    super.firstName = "Alireza";
  }

  work() {
    this._firsName = this.firstName;
  }
}

abstract class UiElement {
  constructor(public identifier: string) {}

  clone() {
    //...
  }
}

class SideDrawerElement extends UiElement {
  constructor(public identifier: string, public position: "left" | "right") {
    super(identifier);
  }
}
