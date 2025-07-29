//write a program to find whether the given string contains balanced paranthesis or not

function balancedParanthesis(s){
    let stk = [];
    for(let char of s){
        if(char==='(' || char==='{' || char==='['){
            stk.push(char);
        }
        else{
            if(stk.length===0) return false;
            let ch = stk.pop();
            if((ch==='(' && char=== ')')
                || (ch==='[' &&  char===']') ||
                    (ch==='{' && char === '}')
            ){
                continue;
            }else{
                return false;
            }
        }
    }
    return stk.length===0;
}

console.log(balancedParanthesis('(){}['))