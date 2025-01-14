const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

/* Main Things
  * Always catch error in the last. since next passes to the next middleware.
  * Since, errors are sent down the stream and not up.
 */

app.get('/user', function(req, res,next) {
  try{
    throw new Error("User not found");
  }catch (err){
    next(err)

    //if we don't use return then the lower section of code will
    //execute resulting in error: Cannot set headers after they are sent to the client.
    return
  }
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});
app.use((err, req, res, next) => {
  errorCount++
  // console.error(err)
  res.status(404).send("Error Caught")
})

app.listen(3002)

module.exports = app;
