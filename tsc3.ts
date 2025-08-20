// 3. Find Maximum Value (with Nullable)
// Assignment: Add types for arrays and handle the nullable return value.

function findMax(arr: number[]): number | null {
  if (arr.length === 0) return null;
  return Math.max(...arr);
}
const nums1: number[] = [3, 7, 9];
console.log(findMax(nums1));
