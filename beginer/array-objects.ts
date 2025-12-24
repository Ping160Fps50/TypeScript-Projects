let names = ["Alireza", "Arshia", "Mohammad"];

names.push("Poya");

// let users: (string | number)[];

let users: Array<string | number>; // generic type

users = ["Alireza", "Arshia", "Mohammad", 10];

users.push(11);

let tuple: [number, string, boolean]; // tuple type

tuple = [2, "Alireza", true];

let object: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
};

object = {
  name: "Alireza",
  age: 25,
  hobbies: ["Gaming", "Coding"],
  role: {
    description: "Admin",
    id: 1,
  },
};

let val: {} = "Alireza"; // not be undefind or null

let someObject: Record<string, string | number | boolean | string[]>; // Record is a generic type | object of key: string, value: string | number | boolean | string[]

someObject = {
  name: "Alireza",
  age: 25,
  hobbies: ["Gaming", "Coding"],
};
