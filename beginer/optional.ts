function generateError(msg?: string): never {
  // optional paramatr
  throw new Error(msg);
}

generateError();
generateError("Server Error");

type user = {
  name: string;
  age: number;
  role?: "Admin" | "Guest";
};

const user: user = {
  name: "Alireza",
  age: 25,
};
