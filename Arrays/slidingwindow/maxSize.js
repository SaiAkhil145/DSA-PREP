//longest subarray with sum<=k

let maxSize = (arr,k)=>{
    let left=0,right=0,sum=0,maxSize=0;
    while(right<arr.length){
        sum+=arr[right];
        while(sum>=k){
            sum-=arr[left];
            left++;
        }
        if(sum<=k) maxSize =Math.max(maxSize,right-left+1);
        right++;
    }
    return maxSize;
}
console.log(maxSize([1,2,3,4,5],7))