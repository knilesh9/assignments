const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

const { Admin } = require("../db/")
const { Course } = require("../db/")

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    let username = req.headers.username
    let password = req.headers.password

    Admin.create({
        username: username,
        password: password
    }).then((isUser)=>{
        if(isUser){
        res.status(200).json({
            msg: "Admin Created Successfully",
            Created: isUser
        })
        }else{
            res.status(404).json({
                Error: "Unable to create Admin"
            })
        }
    })


});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    let username = req.headers.username
    let password = req.headers.password

    let title = req.body.title
    let description = req.body.description
    let price = req.body.price
    let imageLink = req.body.imagelink


    Admin.findOne({
        username: username,
        password: password
    }).then((isUser) => {

        if(isUser){
            // let courseId =
            Course.create({
                title: title,
                description: description,
                cost: price,
                imageLink: imageLink
            }).then((isCreated) => {
                // let courseId = Course.findOne()
                let { id } = isCreated;
                res.status(200).json({
                    Message: "Course Created Successfully",
                    CourseId: id
                })
            })
        }else{
            res.status(404).json({
                Error: "Unable to create course, check Admin Cred Or Course"
            })
        }
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    let username = req.headers.username
    let password = req.headers.password

    Admin.findOne({
        username: username,
        password: password
    }).then((isUser) => {
        if(isUser){
            Course.find({}) //don't forget to await here.
                .then((allCourses) => {
                    res.status(200).json({
                        AllCourses: allCourses
                    })
                })
        }else{
            res.status(404).json({
                Error: "Something went wrong"
            })
        }
    })
});

module.exports = router;