function newAdd(a: number, b: number): number {
  return a + b;
}

function voidFunction(message: string): void {
  console.log(message);
}

function neverFunction(error: string): never {
  throw new Error(error);
}

function performJob(cb: () => void) {
  //...
  cb();
}

type user = {
  name: string;
  age: number;
  greet: () => string;
};

let user: user = {
  name: "Alireza",
  age: 25,
  greet() {
    console.log("Done!");
    return this.name;
  },
};
