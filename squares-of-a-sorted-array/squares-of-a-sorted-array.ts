function sortedSquares(nums: number[]): number[] {
    const sorted: number[] = [];
    nums.forEach(num => sorted.push(num * num))
    return sorted.sort((a,b) => a - b);
};