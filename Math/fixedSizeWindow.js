//given an array we need to find the maxSum with k size.

// let maxSum = (arr,k)=>{
//     let sum=0,maxSum=0;
//     for(let i=0;i<k;i++){
//         sum+=arr[i];
//     }
//     maxSum=sum;
//     for(let i=k;i<arr.length;i++){
//         sum+=arr[i]-arr[i-k];
//         maxSum=Math.max(maxSum,sum);
//     }
//     return maxSum;
// }
// console.log(maxSum([-1,-2,3,4,-5,6],3))

let maxSum = (arr,k)=>{
    let maxSum=0;
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=i;j<arr.length;j++){
            sum+=arr[j];
            if(j-i+1===k){
            maxSum=Math.max(sum,maxSum);
        }
        if(j-i+1>k){
            break;
        }
        }
        
    }
    return maxSum;
}
console.log(maxSum([-1,2,-3,4,-5,6],2))


