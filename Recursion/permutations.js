function permutations(arr){
    let res =[];
    function allPermutations(i){
        if(i===arr.length){
            res.push([...arr]);
            return;
        }
        for(let j=i;j<arr.length;j++){
            swap(arr,i,j);
            allPermutations(i+1);
            swap(arr,i,j);
        }
    }
    allPermutations(0)
    return res;
}

console.log(permutations([1,2,3]))

function swap(arr,i,j){
    [arr[i],arr[j]]=[arr[j],arr[i]];
}