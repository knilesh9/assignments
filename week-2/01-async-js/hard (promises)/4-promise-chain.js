/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 
 */

// const wait = require("./1-promisify-setTimeout");

function wait1(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        }, t * 1000);
    });
}

function wait2(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        }, t * 1000);
    });
}

function wait3(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        }, t * 1000);
    });
}

function calculateTime(t1, t2, t3) {

   const now = Date.now();
    return wait1(t1).then(() => {
        return wait2(t2).then(() => {
            return wait3(t3).then(() => {
                return new Promise((resolve) => {
                    resolve(Date.now() - now);
                });
            });
        });
    });
}

calculateTime(1,3,4);
module.exports = calculateTime;


// ---------------------------------

// function wait1(t) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, t * 1000);
//     });
//   }
  
//   function wait2(t) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, t * 1000);
//     });
//   }
  
//   function wait3(t) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, t * 1000);
//     });
//   }
  
//   function calculateTime(t1, t2, t3) {
//     const start = Date.now();
  
//     return wait1(t1).then(() => {
//       return wait2(t2).then(() => {
//         return wait3(t3).then(() => {
//           return new Promise((resolve) => {
//             resolve(Date.now() - start);
//           });
//         });
//       });
//     });
//   }
  
//   calculateTime(1, 2, 3);
  
//   module.exports = calculateTime;