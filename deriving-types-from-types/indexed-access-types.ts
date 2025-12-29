// const user = {
//   name: "Alireza",
//   age: 25,
//   permissions: [
//     { id: 1, title: "Admin", description: "Accessing The Website" },
//   ],
// };

// type User = typeof user;

type User = {
  name: string;
  age: number;
  permissions: { id: number; title: string; description: string }[];
};

type Perms = User["permissions"];

type Perm = Perms[number]; // gives the values of the array

type Names = string[];

type Name = Names[number];
