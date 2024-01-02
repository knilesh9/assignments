const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const { User, Course } = require("../db/")
const {all} = require("express/lib/application");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    let username = req.headers.username
    let password = req.headers.password
    // let email = req.headers.email

    try{
        let isCreated = await User.create({
            username: username,
            password: password
            // email: email
        })

        if(isCreated){
            let { id, username, password } = isCreated

            res.status(200).json({
                msg: "User Created Successfully",
                id,
                username,
                password,
                // email
            })
        }else{
            res.status(404).json({
                Error: "Something went wrong."
            })
        }

    }catch (err){
        console.log("ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR")
        console.log(err)
        res.status(404).json({
            Error: err
        })
    }

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    let username = req.headers.username
    let password = req.headers.password

    try{
        const isUser = await User.findOne({username, password})
        if(isUser){
            const allCourses = await Course.find({})
            res.status(200).json({
                User: username,
                allCourses: allCourses
            })
        }else {
            res.status(404).json({
                Error: "Something went wrong"
            })
        }
    }catch (err){
            console.log(err)
        res.status(404).json({
            Error: err
        })
    }
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router