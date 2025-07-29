//sliding window maximum

function slidingWindowMaximum(arr,k){
    let res=[];
    let maxi=0;
    for(let i=0;i<k;i++){
        maxi=Math.max(maxi,arr[i]);
    }
    for(let i=k;i<arr.length;i++){
        
    }
}
console.log(slidingWindowMaximum([3,2,1,5,7,4,3,7],3))