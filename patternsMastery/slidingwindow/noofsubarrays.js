// Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

// let subsCount = (arr,k,t)=>{
//     let count=0;
//     for(let i=0;i<arr.length;i++){
//         let sum=0;
//         for(let j=i;j<arr.length;j++){
//             sum+=arr[j];
//             let avg = sum/k;
//             if(j-i+1===k && avg>=t){
//                 count++;
//             }
//             if(j-i+1>k){
//                 break;
//             }
//         }
//     }
//     return count;
// }
// console.log(subsCount([11,13,17,23,29,31,7,5,2,3],3,5))


let subsCount = (arr,k,t)=>{
    let count=0;
    let right=0,left=0,sum=0;
    let avg=0;
    while(right<arr.length){
        sum+=arr[right];
        
        if(right-left+1===k){
            avg=sum/k;
            if(avg>=t){
                count++;
            }
            sum-=arr[left];
            left++;
        }
        right++;
    }
    return count;
}

console.log(subsCount([2,2,2,2,5,5,5,8],3,4))