
//find the length of the longest subarray with sum k where it contains negatives

//the approach for this is negative elements is prefix+hashmap


function longestSubarray(arr,k){
    let map = new Map();
    let sum=0,maxLen=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];

        if(sum===k){
            maxLen= Math.max(maxLen,i+1);
        }
        let rem = sum-k;
        if(map.has(rem)){
            maxLen = Math.max(maxLen,i-map.get(rem));
        }
        map.set(sum,i);
    }
    return maxLen;
}

console.log(longestSubarray([-1,1,1],1))