
//print n to 1;

function printNto1(n){
    if(n===0) return;
    console.log(n);
    printNto1(n-1);
}
printNto1(10)

function print1toN(n){
    if(n===0) return;
    print1toN(n-1);
    console.log(n);
}
print1toN(10)