//return count of the subarrays containing the sum k

function countOfSubs(arr,k){
    let map = new Map();
    map.set(0,1);
    let sum=0,count=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];

        if(map.has(sum-k)){
            count+=map.get(sum-k);
        }
        map.set(sum,(map.get(sum) || 0)+1);
    }
    return count;
}
console.log(countOfSubs([1,1,1],2))