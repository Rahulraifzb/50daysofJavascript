## Write a function which can convert the time input given in 12 hours format to 24 hours format

+ The check for 'AM' and 'PM' can be verified using endsWith String Method.
+ An extra 0 would be needed if the (hours or minutes) have single digit.

## Challenges (0/6 done)

- [ ] convertTo24HrsFormat("12:10 AM") returns "00:10"
- [ ] convertTo24HrsFormat("5:00 AM") returns "05:00"
- [ ] convertTo24HrsFormat("12:33 PM") returns "12:33"
- [ ] convertTo24HrsFormat("01:59 PM") returns "13:59"
- [ ] convertTo24HrsFormat("11:8 PM") returns "23:08"
- [ ] convertTo24HrsFormat("10:02 PM") returns "22:02"

```
    const time = '12:10 AM';

    function convertTo24HrsFormat(time){
        // write your solution here

        return 
    }

    console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
```

[Resource-1](https://stackoverflow.com/questions/15083548/convert-12-hour-hhmm-am-pm-to-24-hour-hhmm)
