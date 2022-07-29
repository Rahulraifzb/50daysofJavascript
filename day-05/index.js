const str = "F(X) !== G(X) !== F(X)";

function getTheGapX(str){
    if(str.indexOf('X') === -1 || str.lastIndexOf("X") === -1) return -1
    return str.lastIndexOf('X') - str.indexOf("X");
}

console.log(`Gap between the X's: ${getTheGapX(str)}`);