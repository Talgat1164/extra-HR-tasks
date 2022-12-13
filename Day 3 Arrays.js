function getSecondLargest(nums) {
    nums.sort(( a, b ) =>  a - b).reverse() 
    console.log(nums)
    for (let i of nums) {
        if (i !== nums[0]) {
            return i;
            break;
        }
    }
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(getSecondLargest(nums))