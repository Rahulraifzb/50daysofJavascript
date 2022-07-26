let num = 1234;

// Method 1
function reverseGiverInteger1(num){
    let _num = num;
    let reverse = 0;

    while(_num !== 0){
        let temp = _num % 10;
        reverse = ((reverse * 10) + temp);
        _num = Math.floor(_num/10);
    }

    return reverse;
}

// Method 2
function reverseGiverInteger2(num){
    return parseInt(num.toString().split("").reverse().join(""))
}

console.log(`Reversed integer is: ${reverseGiverInteger2(num)}`)
