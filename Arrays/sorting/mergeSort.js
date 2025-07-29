let mergeSort = (arr)=>{
    let count=0;
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left=[],right=[];
    for(let i=0;i<mid;i++) left.push(arr[i]);
    for(let j=mid;j<arr.length;j++) right.push(arr[j]);
    return merge(mergeSort(left),mergeSort(right));
}
let merge = (left,right)=>{
    let count=0;
    let merged = [];
    let i=0,j=0;
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            merged.push(left[i++]);
        }else{
            merged.push(right[j++]);
            count++;
        }
    }
    while(i<left.length){
        merged.push(left[i++]);
    }
    while(j<right.length){
        merged.push(right[j++]);
    }
    return count;
}

console.log(mergeSort([10,9,8,7,6,5,4,3,2,1]))


function countInversions(arr){

}


// class Solution {
//     mergeSort(arr, l, r) {
//         // code here
//         if(l>=r) return arr;
//         let mid = Math.floor((l+r)/2);
//         this.mergeSort(arr,0,mid);
//         this.mergeSort(arr,mid+1,r);
//         this.merge(arr,l,mid,r);
//     }
//     merge(arr,l,mid,r){
//         let left=arr.slice(l,mid+1);
//         let right=arr.slice(mid+1,r+1);
//         let i=0,j=0,k=l;
//         while(i<left.length && j<right.length){
//             if(left[i]<right[j]){
//                 arr[k++]=left[i++];
//             }else{
//                 arr[k++]=right[j++];
//             }
//         }
//         while(i<left.length){
//             arr[k++]=left[i++];
//         }
//         while(j<right.length){
//             arr[k++]=right[j++];
//         }
//     }
// }

// const solution = new Solution();
// let val =solution.mergeSort([9,8,7,6,5,4,3,2,1],0,8)
// console.log(val);


