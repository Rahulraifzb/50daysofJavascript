const time = "05:00 PM";
const time_02 = '11:10 PM';

// Method 1
function convertTo24HrsFormat1(timeTo24){
    // Test Case
    if(!['am','AM','pm','PM'].includes(timeTo24.slice(-2)) || !timeTo24.includes(" ")) return "Time isn't valid!";

    // Logic Part
    let [time,modifier] = timeTo24.split(" ");
    let [hours,minutes] = time.split(":")

    if(hours === '12') hours = "00";
    if(modifier === 'PM' || modifier === 'pm') hours = parseInt(hours,10) + 12;

    if(hours.length === 1) hours = "0" + hours;
    if(minutes.length === 1) minutes = "0" + minutes;

    return `${hours}:${minutes}`;
}

// Method 2
function convertTo24HrsFormat2(timeTo24){
    const regx = '^(0[1-9]|1[0-2]):([0-5][0-9]) ((a|p)m|(A|P)M)$';

    if(!timeTo24.match(regx)) return "Time is must be (12:05 AM) in this format.";

    let [fullTime,hours,minutes,modifier] = timeTo24.match(regx);

    if(hours === '12') hours = '00';
    if(modifier === 'pm' || modifier === 'PM') hours = parseInt(hours,10) + 12;
    
    return `${hours}:${minutes}`;
}

// Method 3
function convertTo24HrsFormat3(timeTo24){
    const date = new Date('07/22/2022 ' + timeTo24);
    const _hours = date.getHours();
    const _minutes = date.getMinutes();

    let hours = _hours.toString().length === 1 ? "0" + _hours : _hours; 
    let minutes = _minutes.toString().length === 1 ? "0" + _minutes : _minutes; 

    return `${hours}:${minutes}`;
}


console.log(`Converted time: ${convertTo24HrsFormat2(time)}`)