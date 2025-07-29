function nextPermutation(arr,target){
    let res = [];
    function permutations(i){
        if(i===arr.length){
            res.push([...arr]);
            return;
        }
        for(let j=i;j<arr.length;j++){
            [arr[i],arr[j]]=[arr[j],arr[i]];
            permutations(i+1);
            [arr[i],arr[j]]=[arr[j],arr[i]];
        }
    }
    permutations(0);
    for(let i=0;i<res.length;i++){
            if(isEqual(res[i],target)){
                return res[i+1] || 0;
            }
    }
}
function isEqual(arr1,arr2){
    if(arr1.length!=arr2.length){
        return false;
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!=arr2[i]){
            return false;
        }
    }
    return true;
}

console.log(nextPermutation([1,2,3],[2,3,1]))