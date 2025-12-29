type User = { name: string; id: number };
type UserKeys = keyof User;

let validKey: UserKeys;

validKey = "name";
validKey = "id";

function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
  const value = obj[key];
  if (value === undefined || value === null) {
    throw new Error("Accessing Undefind Or Null Value");
  }
  return value;
}

const user = { name: "Alireza", id: 1, age: 25 };

const val = getProp(user, "id");
