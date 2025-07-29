//dutch national flag algorithm 

//[1,0,2,0,1,0,1,2,2,1]
//left,curr = 0  right =arr.length-1;

let sortColors = (arr)=>{
    let left=0,right=arr.length-1,curr=0;
    while(curr<=right){
        if(arr[curr]===0){
            [arr[left],arr[curr]]=[arr[curr],arr[left]];
            left++;
            curr++;
        }else if(arr[curr]==1){
            curr++;
        }else{
            [arr[curr],arr[right]]=[arr[right],arr[curr]];
            right--;
        }
    }
    return arr;
}
console.log(sortColors([1,2,1,2,1,0,0]))