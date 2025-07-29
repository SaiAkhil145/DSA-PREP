function previousSmaller(arr){
    let stk=[],pse=[];
    for(let i=0;i<arr.length;i++){
        while(stk.length && stk[stk.length-1]>=arr[i]){
            stk.pop();
        }
        if(!stk.length) pse.push(-1);
        else pse.push(stk[stk.length-1]);
        stk.push(arr[i]);
    }
    return pse;
}
console.log(previousSmaller([1, 2, 3, 1, 2, 6, 2, 3]))