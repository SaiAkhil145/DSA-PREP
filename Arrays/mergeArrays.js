//merge two sorted arrays without using any extra space

function mergeSortedArrays(arr1,arr2,m,n){
    let last = m+n-1;
    while(m>0 && n>0){
        if(arr1[m-1]>arr2[n-1]){
            arr1[last]=arr1[m-1];
            m--;
        }else{
            arr1[last]=arr2[n-1];
            n--;
        }
        last--;
    }
    //leftover elements of second array if n is still is greater than 0;
    while(n>0){
        arr1[last]=arr2[n-1];
        n--;
        last--;
    }
    
}

console.log(mergeSortedArrays([1,2,3,0,0,0],[4,5,6]))