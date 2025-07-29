let bubbleSort = (arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                console.log(arr)
            }
        }
    }
    console.log(arr);
}
bubbleSort([5,4,3,2,1])

//[ 4, 5, 3, 2, 1 ]
// [ 4, 3, 5, 2, 1 ]
// [ 4, 3, 2, 5, 1 ]
// [ 4, 3, 2, 1, 5 ]
// [ 3, 4, 2, 1, 5 ]
// [ 3, 2, 4, 1, 5 ]
// [ 3, 2, 1, 4, 5 ]
// [ 2, 3, 1, 4, 5 ]
// [ 2, 1, 3, 4, 5 ]
// [ 1, 2, 3, 4, 5 ]
// [ 1, 2, 3, 4, 5 ] - these are the steps;
