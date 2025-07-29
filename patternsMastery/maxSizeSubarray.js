///maximum size subarray with size k

let maxSum = (arr,k)=>{
    let left=0;
    let right=0;
    maxSum=0;
    let sum=0;
    while(right<arr.length){
        sum+=arr[right];
        if(right-left+1===k){
            maxSum=Math.max(maxSum,sum);
            sum-=arr[left];
            left++;
        }
        right++;
    }
    return maxSum;
}
console.log(maxSum([1,2,3,4,-5],2))