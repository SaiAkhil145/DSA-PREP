//return an nge array with all the next greater elements

function nextGreaterElement(arr){
    let nge=new Array(arr.length).fill(-1);
    let stk=[];
    for(let i=arr.length-1;i>=0;i--){
        while(stk.length && stk[stk.length-1]<=arr[i]){
            stk.pop();
        }
        if(stk.length===0){
            nge[i]=-1;
        }else{
            nge[i]=stk[stk.length-1]
        }
        stk.push(arr[i])

    }
    return nge.join(' ');
}
console.log(nextGreaterElement([10,11,2,3,4,7,9,11]))