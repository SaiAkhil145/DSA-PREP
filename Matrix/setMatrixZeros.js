//set matrix zeros

function setMatrixZeros(mat){
    let row=mat.length;
    let col=mat[0].length;
    let res=[];
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(mat[i][j]===0){
                res.push([i,j]);
            }
        }
    }
    for(let i=0;i<res.length;i++){
        const [row,col]=res[i];
        for(let i=0;i<row;i++){
            mat[i][col]=0;
        }
        for(let j=0;j<col;j++){
            mat[row][i]=0;
        }
    }
    return mat;
}
console.log(setMatrixZeros([[1,2,3],[1,0,1],[1,3,4]]))