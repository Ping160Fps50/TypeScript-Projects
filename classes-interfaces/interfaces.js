var user;
user = {
    email: "test@gmail.com",
    password: "abc1",
    login: function () { },
    logout: function () { },
};
var AuthenticatableUser = /** @class */ (function () {
    function AuthenticatableUser(email, password) {
        this.email = email;
        this.password = password;
    }
    AuthenticatableUser.prototype.login = function () { };
    AuthenticatableUser.prototype.logout = function () { };
    return AuthenticatableUser;
}());
function authenticate(user) {
    user.login();
}
