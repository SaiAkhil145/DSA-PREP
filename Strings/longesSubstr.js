// //longest substring without repeating chars
// let longestSubstr = (str)=>{
//     let left=0,right=0,maxLen=0;
//     let map = new Map();

//     while(right<str.length){
//         let char = str[right];

//         if(map.has(char) && map.get(char)>=left){
//             left=map.get(char)+1;
//         }
//         maxLen=Math.max(maxLen,right-left+1);
//         map.set(char,right);
//         right++;
//     }
//     return maxLen;
// }
// console.log(longestSubstr("abcddk"))


//triplet sum

let tripletSum = (arr)=>{
    let set = new Set();
    let ans = [];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            for(let k=j+1;k<arr.length;k++){
                if(arr[i]+arr[j]+arr[k]===0){
                    let temp = [arr[i],arr[j],arr[k]]
                    temp.sort((a,b)=>a-b);
                    let key =temp.join(' ');
                    if(!set.has(key)){
                        
                        set.add(key);
                        ans.push(set);
                    }
                }
            }
        }
    }
   
    return ans;
}

console.log(tripletSum([-1, 0, 1, 2, -1, -4]))