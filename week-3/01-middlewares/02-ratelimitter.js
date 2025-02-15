const request = require('supertest');
const assert = require('assert');
const express = require('express');
const { head } = require('./01-requestcount');
const app = express();


let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)


function rateLimiter(req, res, next){

  console.log(req.headers);
  let userId = req.headers.userid;
  //remember to use caseSensitive, all are send in lowercase.

  // console.log(userId)

  numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] || 1;
  
  // console.log(numberOfRequestsForUser[userId])
  
  if(numberOfRequestsForUser[userId] >= 5){
    return res.status(404).json({
      error: "You have been Rate limited"
    })
  }

  numberOfRequestsForUser[userId]++
  next()

}

app.use(rateLimiter)
//above
app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.listen(3001)

module.exports = app;


/*
You have been given an express server which has a few endpoints.
Your task is to create a global middleware (app.use) which will
rate limit the requests from a user to only 5 request per second
If a user sends more than 5 requests in a single second, the server
should block them with a 404.
User will be sending in their user id in the header as 'user-id'
You have been given a numberOfRequestsForUser object to start off with which
clears every one second
*/