//print array elements

// function printArray(i,n,arr){
//     if(i>n) return;
//     console.log(arr[i]);
//     printArray(i+1,n,arr);
// }
// printArray(0,4,[1,2,3,4])


// function printReverseArray(n,arr){
//     if(n<0) return;
//     console.log(arr[n]);
//     printReverseArray(n-1,arr);
// }
// printReverseArray(5,[1,2,3,4,5])


// function reverseArray(low,high,arr){
//     if(low===high) return arr;
//     [arr[low],arr[high]]=[arr[high],arr[low]];
//     return reverseArray(low+1,high-1,arr);
// }
// console.log(reverseArray(0,4,[1,2,3,4,5]))


// function reverseArray(i,arr){
//     let n=arr.length;
//     if(i>=Math.floor(arr.length/2)) return arr;
//     [arr[i],arr[n-i-1]]=[arr[n-i-1],arr[i]];
//     return reverseArray(i+1,arr);
// }
// console.log(reverseArray(0,[1,2,3,4]))


// function palindrome(i,str){
//     let n = str.length;
//     if(i>= Math.floor(n/2)) return true;
//     if(str[i]!=str[n-i-1]) return false;
//     return palindrome(i+1,str);
// }
// console.log(palindrome(0,'madamm'))

function NthFib(n){
    if(n<=1) return n;
    return NthFib(n-1)+NthFib(n-2);
}
console.log(NthFib(3))