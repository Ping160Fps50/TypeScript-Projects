type User = {
  [prop: string]: number | boolean;
};

let someObject: Record<string, number | boolean>;

let user: User = {};

//...

user.id = 50;
user.admin = true;

let roles = ["admin", "user", "editor"] as const;

// roles.push("guest");

const firstRole = roles[0];

let dataEnteries = {
  entry1: 1,
  entry2: 2,
} satisfies Record<string, number>;

// dataEnteries.entry3;
