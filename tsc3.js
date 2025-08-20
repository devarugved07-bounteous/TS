// 3. Find Maximum Value (with Nullable)
// Assignment: Add types for arrays and handle the nullable return value.
function findMax(arr) {
    if (arr.length === 0)
        return null;
    return Math.max.apply(Math, arr);
}
var nums1 = [3, 7, 9];
console.log(findMax(nums1));
