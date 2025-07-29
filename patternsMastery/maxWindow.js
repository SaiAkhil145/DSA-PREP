//return maxwindow size where sum is >= k

let maxWindow = (arr,k)=>{
    let sum=0;
    let maxLen = 0;
    let left=0,right=0;
    while(right<arr.length){
        sum+=arr[right];
        while(sum>k && left<=right){
            sum-=arr[left];
            left++;
        }
        if(sum>=k){
            maxLen=Math.max(maxLen,right-left+1);
        }
        right++;
    }
    return maxLen;
}

console.log(maxWindow([1,-2,-3,4,5],9))