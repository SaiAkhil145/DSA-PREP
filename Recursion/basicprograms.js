//sum of n numbers

// function sumofN(n,sum){
//     if(n==0) return sum;
//     return n + sumofN(n-1,sum);
// }
// console.log(sumofN(5,0))

//factorial of a number

function factorial(n,fact){
    if(n===1) return fact;
    return fact * factorial(n-1,fact);
}
console.log(factorial(5,1))