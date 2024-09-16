export function closest(nums: number[], target: number): number {
   let closestSum = Number.MAX_VALUE;

    for(let a = 0; a < nums.length ; a++) {
        for(let b = a + 1; b < nums.length; b++) {
            for(let c = b + 1; c < nums.length; c++) {
               
               if ((Math.abs(target - closestSum) > Math.abs(target - (nums[a] + nums[b] + nums[c])))) {
                 closestSum = (nums[a] + nums[b] + nums[c]);
               }

            } 
        }
    }
   return closestSum;
}

module.exports = { closest }
