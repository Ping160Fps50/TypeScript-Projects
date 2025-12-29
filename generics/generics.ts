let names: Array<string> = ["Alireza", "Arshia", "Mamad"];

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};

store.name = "Alireza";
store.admin = "Admin";

let nameStore: DataStore<string> = {};

function merge<T>(a: T, b: T) {
  return [a, b];
}

const ids = merge(1, 2);
const mergeNames = merge("Alireza", "Mamad");

function mergeDiffer<T, U>(a: T, b: U) {
  // different types
  return [a, b];
}

const idsDiffer = mergeDiffer(1, "Alireza");
const mergeNamesDiffer = mergeDiffer("Alireza", 2);

function mergeObj<T extends object>(a: T, b: T) {
  return { ...a, ...b };
}

let merged = mergeObj({ name: "Alireza" }, { age: 25 });

class User<T> {
  constructor(public id: T) {}
}

let aliId = new User("id1");
