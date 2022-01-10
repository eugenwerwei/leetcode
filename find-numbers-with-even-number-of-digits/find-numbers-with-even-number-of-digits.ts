function findNumbers(nums: number[]): number {
    let evens: number = 0;
    nums.forEach(num => {
        if(num.toString(10).split('').length % 2 === 0){
            evens++;      
        }
    });
    return evens;
};
