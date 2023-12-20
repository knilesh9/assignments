/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    var time = new Date().getTime();
    while(new Date().getTime() - time < milliseconds){
        // now = time;
    }
    return new Promise((resolve)=>{
        resolve()
    })
    
}

module.exports = sleep;

sleep(5000)
.then(()=>{
})