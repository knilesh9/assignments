function wait1(t) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, t);
    });
  }
  
  function wait2(t) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, t);
    });
  }
  
  function wait3(t) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, t);
    });
  }
  
  function calculateTime(t1, t2, t3) {
    return wait1(t1 * 1000)
      .then(() => {
        console.log("I don't know how to chain them.");
        return wait2(t2 * 1000);
      })
      .then(() => {
        console.log("I know the t2 now");
        return wait3(t3 * 1000);
      })
      .then(() => {
        console.log("I know 'em all.");
      });
  }

  calculateTime(2,3,5)