var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["REGISTRED_USER"] = 100] = "REGISTRED_USER";
    Role[Role["UNREGISTERED_USER"] = 0] = "UNREGISTERED_USER";
})(Role || (Role = {}));
console.log("status:", Role.REGISTRED_USER);
