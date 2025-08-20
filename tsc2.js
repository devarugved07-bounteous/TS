// 2. Sum Numbers in an Array
// Assignment: Add proper types to the array and function.
function sumArray(numbers) {
    return numbers.reduce(function (acc, num) { return acc + num; }, 0);
}
var nums = [3, 7, 9];
console.log(sumArray(nums));
