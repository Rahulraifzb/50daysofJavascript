const str = "The best thing is to learn the code";
const wordLimit = 6;

function truncateWithWordLimit(str,wordLimit){
    str += " ";
    let spaceCount = 0;
    let index = 0;

    for(let i=0;i<str.length;i++){
        if(str[i] == " ") {
            spaceCount += 1;
        }
        if(spaceCount === wordLimit) {
            index = i;    
            break;
        }
    }

    console.log(str,index)
    return str.slice(0,index);
}

console.log(`Truncated string: ${truncateWithWordLimit(str,wordLimit)}`);