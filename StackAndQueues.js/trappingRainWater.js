// //trapping rain water
// //we can solve this using two approaches prefix and suffix max approach1
// //approach2 two pointer

// function trappingRainWater(arr){
//     let leftMax=prefixMax(arr);
//     let rightMax=suffixMax(arr);
//     let total=0;
//     for(let i=0;i<arr.length;i++){
//         let water = Math.min(leftMax[i],rightMax[i])-arr[i];
//         if(water>0){
//             total+=water;
//         }
//     }
//     return total;
// }
// function prefixMax(arr){
//     let currMax=arr[0];
//     let prefix=[];
//     for(let i=0;i<arr.length;i++){
//         currMax=Math.max(currMax,arr[i]);
//         prefix.push(currMax);
//     }
//     return prefix;
// }
// function suffixMax(arr){
//     let suffix = new Array(arr.length);
//     let currMax=arr[arr.length-1];
//     for(let i=arr.length-1;i>=0;i--){
//         currMax = Math.max(currMax,arr[i]);
//         suffix[i]=currMax;
//     }
//     return suffix;
// }



function trappingRainWater(arr){
    let left=0,right=arr.length-1,total=0;
    let leftMax=0,rightMax=0;
    while(left<=right){
        if(arr[left]<=arr[right]){
            if(arr[left]>=leftMax){
                leftMax=arr[left];
            }else{
                total+=leftMax-arr[left];
            }
            left++;
        }else{
            if(arr[right]<=arr[left]){
                if(arr[right]>=rightMax){
                    rightMax=arr[right];
                }else{
                    total+=rightMax-arr[right];
                }
                right--;
            }
        }

    }
    return total;
}

console.log(trappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1]))
