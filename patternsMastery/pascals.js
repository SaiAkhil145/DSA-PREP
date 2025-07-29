//pascals traingle variations

//given n and r return the element at that position
//given row number and return the row elements
//given n print the entire pascal's triangle

//1st pattern

//find ncr=>n!/r!*(n-r)!

function ncr(n,r){
    let res=1;
    for(let i=0;i<r;i++){
        res=res*(n-i)/(i+1);
        
    }
    return res;
}
console.log(ncr(5,3))