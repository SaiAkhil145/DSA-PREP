//naive solution 

function slidingWindowMaximum(arr,k){
    let res=[];
    let n = arr.length;
    for(let i=0;i<=n-k;i++){
        let max=-Infinity;
        for(let j=i;j<i+k;j++){
            max=Math.max(arr[j],max);
            
        }
        res.push(max);
    }
    return res;
}
console.log(slidingWindowMaximum([1,3,-1,-3,5,3,6,7],3))