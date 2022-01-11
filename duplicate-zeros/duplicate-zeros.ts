/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
    const copy: number[] = [...arr];
    let offset: number = 1;

    copy.forEach((num, index) => num === 0 && (arr.splice(index + offset, 0, num), offset++))

    arr.splice(copy.length, arr.length);
};