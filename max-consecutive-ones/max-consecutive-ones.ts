function findMaxConsecutiveOnes(nums: number[]): number {
    let m = 0;
    let c = 0;
    for(let i = 0; i <= nums.length - 1; i++) {
        if(nums[i] === 1) {
            c ++;
            if(m < c) {
                m = c;
            }
        } else {
            c = 0;
        }
    }
    return m;
};