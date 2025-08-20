// 2. Sum Numbers in an Array
// Assignment: Add proper types to the array and function.
function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

const nums: number[] = [3, 7, 9];
console.log(sumArray(nums));