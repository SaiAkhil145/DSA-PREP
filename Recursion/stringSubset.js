
function subSets(strs){
    let str = strs.split('');
    let res = [];
    let ans = [];
    function allSubs(i){
        if(i===strs.length){
            res.push(ans.join(''));
            return;
        }
        ans.push(str[i]);
        allSubs(i+1);
        ans.pop();
        allSubs(i+1);
    }
    allSubs(0);
    return res;
}
console.log(subSets("abc"))