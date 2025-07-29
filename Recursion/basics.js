//print n to 1

// function printNto1(i,n){
//     if(i===0) return;
//     console.log(i);
//     printNto1(i-1,n);
// }
// printNto1(10,10)


function print1toN(i,n){
    if(i>n) return;
    console.log(i);
    print1toN(i+1,n);
}
print1toN(1,10)