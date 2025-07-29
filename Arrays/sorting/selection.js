let selectionSort =(arr)=>{
    for(let i=0;i<arr.length;i++){
        let min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]) min=j;
        }
        if(min!=i){
            [arr[i],arr[min]]=[arr[min],arr[i]];
            console.log(arr)
        }
    }
    console.log(arr);
}
selectionSort([5,4,3,2,1])


// [ 1, 4, 3, 2, 5 ]
// [ 1, 2, 3, 4, 5 ]
// [ 1, 2, 3, 4, 5 ]
