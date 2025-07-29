function ncr(n,r){
    let res=1;
    for(let i=0;i<r;i++){
        res = res*(n-i)/(i+1);
    }
    return res;
}


function pascalsTriangleNthRow(n){
    let ans=1;
    let res=[];
    res.push(ans);
    for(let i=1;i<=n;i++){
        ans = ans*(n-i+1)/i;
        res.push(ans);
    }
    return res;
}



function pascalsTriangle(n){
    let res = [];
    for(let i=0;i<=n;i++){
        res.push(pascalsTriangleNthRow(i));
    }
    return res;
}

console.log(pascalsTriangle(5))