var tasks = [
    { type: "email", address: "test@test.com" },
    { type: "log", message: "User logged in" }
];
function processTask(task) {
    if (task.type === "email") {
        // send email
        return "Sent email to ".concat(task.address);
    }
    else if (task.type === "log") {
        // log message
        return "Log: ".concat(task.message);
    }
}
console.log(tasks);
