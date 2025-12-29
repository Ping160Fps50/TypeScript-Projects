interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

interface AuthenticatableAdmin extends Authenticatable {
  role: "Admin" | "Superadmin";
}

let user: Authenticatable;

user = {
  email: "test@gmail.com",
  password: "abc1",
  login() {},
  logout() {},
};

class AuthenticatableUser implements Authenticatable {
  constructor(public email: string, public password: string) {}

  login() {}
  logout() {}
}

function authenticate(user: Authenticatable) {
  user.login();
}
