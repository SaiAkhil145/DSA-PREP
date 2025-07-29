//Given an array nums of size n and an integer k, find the length of the longest sub-array that sums to k. If no such sub-array exists, return 0.


function longestSubarray(arr,k){
    let left=0,right=0,maxLen=0,sum=0;
    while(right<arr.length){
        sum+=arr[right];
        if(sum>k){
            sum-=arr[left];
            left++;
        }
        maxLen = Math.max(maxLen,right-left+1);
        right++;
    }
    return maxLen;
}
console.log(longestSubarray([10, 5, 2, 7, 1, 9],15))