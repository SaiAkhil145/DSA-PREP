//find the length of the longest subarray whose sum===k


//use sliding window + two pointer approach for the array containing only positives


function subarraySumk(arr,k){
    let left=0,right=0,sum=0,maxLen=0;
    while(right<arr.length){
        sum+=arr[right];
        if(left<=right && sum>k){
            sum-=arr[left];
            left++;
        }
        if(sum===k){
            maxLen=Math.max(maxLen,right-left+1);
        }
        right++;
        
    }
    return maxLen;
}
console.log(subarraySumk([1,2,3,4,5,6],6))