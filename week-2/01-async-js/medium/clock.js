//Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function getCurrentTime(){
    let currentTimeInMillis = new Date().getTime();
    // console.log(currentTimeInMillis);

    let date = new Date(currentTimeInMillis);
    // console.log(date);
    
    const hours = date.getHours().toString().padStart(2, '0');
    // console.log(hours);

    // let ampm = isAmPm(hours)
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;

}

function getCurrentTime12Hrs(){
    const currentT = new Date().getTime()
    const currentTinH = new Date(currentT);

    const currentH = currentTinH.getHours().toString().padStart(2, '0');
    // const currentM = currentTinH.getMinutes().toString();
     const currentM = currentTinH.getMinutes().toString().padStart(2, '0');
    const currentS = currentTinH.getSeconds().toString().padStart(2, '0');

    let currentH12;
    if(currentH > 12){
       currentH12 = (currentH - 12).toString().padStart(2, '0');
       //Remember these guys are returning so you need some place to store it.
    }

    let isAMorPM = isAmPm(currentH);

    return (`${currentH12}:${currentM}:${currentS} ${isAMorPM}`)
    // console.log(`${currentH}:${currentM}:${currentS}, ${currentH12}:${currentM}:${currentS}`);
}

function isAmPm(hour){
    let amPm;

    if(hour > 11){
        amPm = "PM";
    }else{
        amPm = "AM";
    }
    return amPm
}



setInterval(()=>{
    console.log("Hour Clock    : "+getCurrentTime());
    console.log("12 Hour Clock : "+getCurrentTime12Hrs());
}, 1000)


// console.log(getCurrentTime())