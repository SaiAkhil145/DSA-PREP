// //subarray
// //contiguos part 

// const subarrays = (arr)=>{
//     for(let i=0;i<arr.length;i++){
//            let str = "[";
//         for(let j=i;j<arr.length;j++){
//             str+=arr[j];
//          console.log(str+"]");
//         }
       
//     }
// }
// subarrays([1,2,3])

//i =0 j = 0 0 0 j++ 1  0 1 1 2 23 123



const subArraySums = (arr)=>{
    let maxSum=0;
    for(let i=0;i<arr.length;i++){
        let sum = 0;
        for(let j=i;j<arr.length;j++){
            sum+=arr[j];
            maxSum = Math.max(sum,maxSum);
        }
    }
    console.log(maxSum);
}
subArraySums([1,2,3]);