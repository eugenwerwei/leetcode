/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums2.splice(n);
    nums1.splice(m);
    nums2.forEach(num => nums1.push(num));
    nums1.sort((a, b) => (a - b));
};