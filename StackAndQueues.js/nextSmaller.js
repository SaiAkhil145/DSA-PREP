

function nextSmallerElement(arr){
    let nse = [],stk=[];
    for(let i=arr.length-1;i>=0;i--){
        while(stk.length && stk[stk.length-1]>=arr[i]){
            stk.pop();
        }
        if(!stk.length) nse.push(-1);
        else nse.push(stk[stk.length-1]);
        stk.push(arr[i])
    }
    return nse;
}
console.log(nextSmallerElement([1,2,3,1,2,6,2,3]))