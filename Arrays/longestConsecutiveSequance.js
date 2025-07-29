// ///return the longest consecutive subSequance

// function longestSubSequance(arr){
//     let longest=1;
//     for(let i=0;i<arr.length;i++){
//         let x = arr[i];
//         let count=1;
//         while(linearSearch(arr,x+1)===true){
//             x=x+1;
//             count=count+1;
//         }
//         longest= Math.max(longest,count);
//     }
//     return longest;
// }
// console.log(longestSubSequance([1,2,3,4,5,100,101,102]))

// function linearSearch(arr,t){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===t){
//             return true;
//         }
//     }
//     return false;
// }

//better approach sort the array


// function longestSubSequance(arr){
//     let count=1,longest=1,lastSmaller=Infinity;
//     arr.sort((a,b)=>a-b)
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]-1===lastSmaller){
//             count++;
//             lastSmaller=arr[i];
//         }else if(arr[i]!==lastSmaller){
//             count=1;
//             lastSmaller=arr[i];
//         }
//         longest=Math.max(longest,count);
//     }
//     return longest;
// }
// console.log(longestSubSequance([1,2,100,101,102,3,4,5]))



//optimal solution

function longestSubSequance(arr){
    let longest =1;
    let set = new Set(arr);
    for(let num of arr){
        if(!set.has(num-1)){
            let curr=num;
            let count=1;
            while(set.has(curr+1)){
                curr++;
                count++;
            }
            longest=Math.max(count,longest);
        }
    }
    return longest;
}
console.log(longestSubSequance([1,2,100,101,102,3,4,5]))