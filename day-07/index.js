const number = '+919876543210';

function validateMobile(number) {
    const regx = /^(\+91|0)?\s?\d{10}$/;
    return regx.test(number);
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)} `)