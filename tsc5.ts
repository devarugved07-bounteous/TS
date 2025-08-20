// 5. Task Processor with Function Type and Union
// Assignment:
// Define union types for tasks
// Type the tasks array and the function arguments/return
type Task =  { type: "email"; address: string }  | { type: "log"; message: string };

const tasks: Task[] = [
  { type: "email", address: "test@test.com" },
  { type: "log", message: "User logged in" }
];


function processTask(task: Task): string | undefined {
  if (task.type === "email") {
    // send email
    return `Sent email to ${task.address}`;
  } else if (task.type === "log") {
    // log message
    return `Log: ${task.message}`;
  }
}

let temp=(processTask(tasks[0]));
console.log(temp);
