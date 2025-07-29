//divide and conquer
//mid finding
//mid based slicing
//merging


function mergeSort(arr){
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right=arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){

    let i=0,j=0;
    let merged = [];
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            merged.push(left[i]);
            i++;
        }else{
            merged.push(right[j]);
            j++;
        }
    }
    while(i<left.length){
        merged.push(left[i]);
        i++;
    }
    while(j<right.length){
        merged.push(right[j]);
        j++;
    }
    return merged;
}

console.log(mergeSort([4,2,1,6,7]))