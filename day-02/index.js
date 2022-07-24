const str = "Javascript is awesome";

// Method 1
function reverseAString1(str){
    if(!str || str.length < 2 || typeof str !== "string") {
        return "Not valid"
    }
    
    let _str = ""
    for(let i=str.length - 1;i>=0;i--){
        _str += str[i]
    }
    return _str
}

// Method 2
function reverseAString2(str){
    if(!str || str.length < 2 || typeof str !== "string") {
        return "Not valid"
    }
    return str.split("").reverse().join("")
}

// Method 3
function reverseAString3(str){
    if(!str || str.length < 2 || typeof str !== "string") {
        return "Not valid"
    }

    // return a new array of string
    const arrayOfString = str.split("");

    // reverse the new created array elements
    const reverseArray = arrayOfString.reverse()
    
    // Join all elements of array into a string
    const _str = reverseArray.join("")

    // return the reversed string
    return _str

}

// Method 4
function reverseAString4(str){
    if(!str || str.length < 2 || typeof str !== "string") {
        return "Not valid"
    }

    const array = new Array()

    for(let i=str.length - 1;i>=0;i--){
        array.push(str[i])
    }

    return array.join("")
}

// Method 5
function reverseAString5(str){
    if(!str || str.length < 2 || typeof str !== "string") {
        return "Not valid"
    }

    return [...str].reverse().join("")
}


console.log(`Reversed string is: ${reverseAString5(str)}`)