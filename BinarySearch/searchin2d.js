function searchInA2DMatrix(mat,target){
    for(let i=0;i<mat.length;i++){
        let bs = binarySearch(mat[i],target);
        
        if(bs!==-1){
            return [i,bs];
        }
    }
}
function binarySearch(arr,target){
    let low=0,high=arr.length-1;
    while(low<=high){
        let mid =Math.floor((low+high)/2);
        if(arr[mid]===target){
            return mid;
        }else if(arr[mid]<target){
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    return -1;
}

console.log(searchInA2DMatrix([[1,2,3],[4,5,6],[7,8,9]],6))