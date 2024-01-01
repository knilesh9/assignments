const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://yyooggeesshh0011:hkKPZhmgb7SeSTeo@cluster0.n4rrafs.mongodb.net/dbAssignment');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: { type: String},
    email: { type: String},
    password: { type: String},
    isAdmin: { type: Boolean},
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: {type: String},
    email: {type: String, unique: true},
    password: { type: String},
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: { type: String},
    description: { type: String},
    cost: { type: String },
    // instructors: { type: String},
    // students: { type: String},
    // startDate: { type: Date},
    imageLink: { type: String},
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}

// (async () => {
//     const admin = await Admin.findOne({
//         username: "rahul",
//         password: "canIdo"
//     });
//
//     // Log the result
//     console.log(admin);
//
//     // Ensure to close the MongoDB connection after the operation
//     // mongoose.connection.close();
// })()

// (()=>{})();
