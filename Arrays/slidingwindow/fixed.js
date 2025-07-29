//given an array we need to find the max subarray with fixed length;

// let maxSum = (arr,k)=>{
//     let left=0,right=0,maxSum=0,sum=0;
//     while(right<arr.length){
//         sum+=arr[right];
        
//         if((right-left+1)===k) {
//              maxSum=Math.max(maxSum,sum);
//             sum-=arr[left];
//             left++;
//         }
//         right++;
//     }    
//     return maxSum;
// }
// console.log(maxSum([1,2,3,4,5],3))


let maxSum = (arr,k)=>{
    let left=0,right=0,maxSum=0,sum=0;
    while(right<arr.length){
        sum+=arr[right];

        if((right-left+1)>k){
            sum-=arr[left];
            left++;
        }
        if((right-left+1)===k){
            maxSum=Math.max(maxSum,sum);
        }
        right++;
    }
    return maxSum;
}
console.log(maxSum([1,2,3,4,5],3))


