function randomNumberGeneratorInRange(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(`My random number: ${randomNumberGeneratorInRange(5,100)}`)