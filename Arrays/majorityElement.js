//[2,2,2,1,1,1,2,2];

// const majorityElement = (arr)=>{
//     let size = arr.length;
//     let maxCount=0;
//     let ele=-1;
//     for(let i=0;i<size;i++){
//         let count=0;
//         for(let j=0;j<size;j++){
//             if(arr[i]===arr[j]) count++;
//         }
//         if(count>maxCount){
//             maxCount = Math.max(count,maxCount);
//             if(maxCount>Math.floor(size/2)) ele = arr[i];
//         }
//     }
//     return ele;
// }
// console.log(majorityElement([2,2,2,1,1,1,2,2]))


//moore's voting algorithm

const majorityElement = (arr)=>{
    let count=0,ele=0,size = arr.length;
    for(let i=0;i<size;i++){
        if(count===0){
            count=1;
            ele=arr[i];
        }
        if(arr[i]===ele){
            count++;
        }else{
            count--;
        }
    }
    count=0;
    for(let i=0;i<size;i++){
        if(arr[i]===ele) count++;
    }
    if(count>Math.floor(size/2)) return ele;
    return -1;
}

console.log(majorityElement([2,2,2,1,1,1,2,2,2]))