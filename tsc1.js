// 1. Greet Function with User Object
// Assignment: Add types to user and the function parameters and return value.
function greetUser(user) {
    return "Hello, ".concat(user.firstName, " ").concat(user.lastName, "!");
}
var user = { firstName: "Sara", lastName: "Ali" };
console.log(greetUser(user));
