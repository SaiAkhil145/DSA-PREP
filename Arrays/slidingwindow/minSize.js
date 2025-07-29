//find the minimum size subarray which equals to the target


let minSubarray = (arr,target)=>{
    let left=0,right=0,minSize=Infinity,sum=0;
    while(right<arr.length){
        sum+=arr[right];
        while(sum>=target){
            minSize = Math.min(minSize,right-left+1);
            sum-=arr[left];
            left++;
        }
        right++;
    }
    return minSize;
}
console.log(minSubarray([1,2,3,4,5],7))