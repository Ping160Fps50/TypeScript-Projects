// enum Role {
//   Admin, // 0
//   User, // 1
//   Moderator, // 2
// }

// let userRole: Role = 0;

type Role = "Admin" | "User" | "Moderator";
type User = {
  name: string;
  age: number;
  role: Role;
  hobbies: string[];
};

let Role: Role = "Admin";

let testTuple: [1 | 2, "Alireza" | "Arshia" | "Mohammad", boolean];

testTuple = [2, "Alireza", true];

const testFunction = (role: Role) => {
  console.log(role);
};
