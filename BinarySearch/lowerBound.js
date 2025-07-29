//find the smallest index of the element >=x
//The lower bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than or equal to a given key i.e. x.

function lowerBound(arr,target){
    let low=0,high=arr.length-1,ans=arr.length;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid]>=target){
            ans=mid;
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return ans;
}


function findMaxOnes(mat){
    let maxCount=0;
    let idx=-1;
    let n = mat.length;
    let m = mat[0].length;
    for(let i=0;i<n;i++){
        let count_ones = m-lowerBound(mat[i],1);
        if(count_ones>maxCount){
            maxCount=count_ones;
            idx=i;
        }
    }
    return idx;
}
console.log(findMaxOnes([[0,0,1,1,1],[0,0,0,0,0],[0,0,1,1,1],[0,1,1,1,1],[0,1,1,1,1]]))