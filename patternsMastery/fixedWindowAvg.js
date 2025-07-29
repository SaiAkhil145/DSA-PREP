
// let maxAvg = (arr,k)=>{
//     let maxAvg =0;
//     for(let i=0;i<arr.length;i++){
//         let sum=0;
//         for(let j=i;j<arr.length;j++){
//             sum+=arr[j];
//             if(j-i+1==k){
//                 let avg = Math.floor(sum/k);
//                 maxAvg=Math.max(avg,maxAvg);
//             }
//             if(j-i+1>k){
//                 break;
//             }
//         }
//     }
//     return maxAvg;
// }
// console.log(maxAvg([1,2,3,4,5,6],4))

let maxAvg = (arr,k)=>{
    let avg=0,maxAvg=0,sum=0;
    for(let i=0;i<k;i++){
        sum+=arr[i];
    }
    avg = Math.floor(sum/k);
    maxAvg=avg;
    for(let i=k;i<arr.length;i++){
        sum+=arr[i]-arr[i-k];
        maxAvg=Math.max(maxAvg,sum/k);
    }
    return parseFloat(maxAvg.toFixed(6))
}
console.log(maxAvg([1,-2,3,-4,5,6],4))