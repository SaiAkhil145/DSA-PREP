//bruteforce 

let OddSubSum = (arr,n)=>{
    let totalSum=0;
    for(let i=0;i<arr.length;i++){
        for(let j=1;i+j<=n;j+=2){
            for(let k=i;k<i+j;k++){
                totalSum+=arr[k];
            }
        }
    }
    return totalSum;
}
console.log(OddSubSum([1,2,3,4,5],5))