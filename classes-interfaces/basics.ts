// class User {
//   name: string;
//   age: number;

//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }
// }

class User {
  readonly hobbies: string[] = [];

  constructor(public name: string, private age: number) {}

  greet() {
    console.log(this.age);
  }
}

const alireza = new User("Alireza", 25);

// alireza.hobbies = [];  readonly
alireza.hobbies.push("Game");
