function isSubsequance(str1,str2){
    let i=0,j=0;
    while(i<str1.length && j<str2.length){
        if(str1[i]===str2[j]){
            i++;
        }
        j++;
    }
    return i===str1.length;
}
console.log(isSubsequance("abc","aebec"))