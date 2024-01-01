// Middleware for handling auth
// const Admin = require('../db/')
//Get the admin(model) from ../db/index.js

const { Admin }  = require('../db/');

 async function adminMiddleware(req, res, next) {
    try {
        // Implement admin auth logic
        // Check headers and validate the admin from the admin DB.

        const username = req.headers.username;
        const password = req.headers.password;

        // console.log(req.headers);

        const isUser =  await Admin.findOne({
            username: username,
            password: password,
        });

        // console.log(isUser)

        if (isUser) {
            next();
        } else {
            res.status(404).json({
                Error: "Invalid Credentials",
            });
        }
    } catch (error) {
        // console.error(error);
        res.status(500).json({
            Error: "Internal Server Error",
        });
    }
}

module.exports = adminMiddleware;

 /** Lessons'
    * 1. Extract the model by using object destructuring ex: const { Admin } = require('../db/')
  *         and then only the Admin.findOne({}) will work. else function not found.
  *
  *   2. If you don't await the response from the findOne the other code will run, with weird behavior
  *         so, you must await the findOne method.
  *
  *   3. You should find the name of the middleware in the function or the route, else that middleware,
  *         might not be working on that route and you will have hard time debugging.
  *
  */