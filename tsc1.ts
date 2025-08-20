// 1. Greet Function with User Object
// Assignment: Add types to user and the function parameters and return value.

type User = {
  firstName: string;
  lastName: string;
};

function greetUser(user: User): string {
  return `Hello, ${user.firstName} ${user.lastName}!`;
}

const user = { firstName: "Sara", lastName: "Ali" };
console.log(greetUser(user));