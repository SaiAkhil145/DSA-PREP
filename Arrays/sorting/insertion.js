// let insertionSort = (arr)=>{
//     for(let i=1;i<arr.length;i++){
//         for(let j=i;j>=0;j--){
//             if(arr[j]<arr[j-1]){
//                 [arr[j],arr[j-1]]=[arr[j-1],arr[j]];
//                 console.log(arr)
//             }
//         }
//     }
//     console.log(arr);
// }
// insertionSort([5,4,3,2,1])


let insertionSort = (arr)=>{
    for(let i=0;i<arr.length;i++){
        let j=i;
        while(j>0 && arr[j-1]>arr[j]){
            [arr[j-1],arr[j]]=[arr[j],arr[j-1]];
            
            j--;
        }
        console.log(arr);
    }
    
}
insertionSort([5,4,3,2,1])