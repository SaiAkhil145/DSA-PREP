//return minimum number of bloom days 

function bloomDay(arr,m,n){
    for(let i=0;i<arr.length;i++){
        if(isPossible(arr,i,m,n)){
            return i;
        }
    }
    return -1;
}
function isPossible(arr,day,m,n){
    let count=0,noOfDays=0;
    for(let i=Math.min(...arr);i<Math.max(...arr);i++){
        if(arr[i]<=day){
            count++;
        }else{
            noOfDays+=Math.floor(count/n);
            count=0;
        }
    }
    noOfDays+=Math.floor(count/n);
    if(noOfDays>=m){
        return true;
    }else{
        return false;
    }
}