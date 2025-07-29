//count subarrays with given sum

//brute force = asusual find all subarrays and count the sum of the subarrays.

//optimal - use prefix array and hashmap;

let countSubarrays = (arr,k)=>{
    let count=0;
    let map = new Map();
    map.set(0,1);
    let left=0,right=0,sum=0;
    while(right<arr.length){
        sum+=arr[right];
        let remove = sum-k;
        if(map.has(remove)){
            count+=map.get(remove);
        }
        map.set(sum,(map.get(sum) || 0)+1);
        right++;
    }
    return count;
}
console.log(countSubarrays([1,2,3,4,5],3))