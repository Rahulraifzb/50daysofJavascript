const obj = {key:1};

function isEmpty(obj){
    return Object.keys(obj).length === 0;
}

console.log(`Is empty object: ${isEmpty(obj)}`)