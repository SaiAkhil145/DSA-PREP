
function reverseString(str,index,newStr){
    if(index<0) return newStr;
    newStr+=str[index];
    return reverseString(str,index-1,newStr);
}
console.log(reverseString('hello',4,''))