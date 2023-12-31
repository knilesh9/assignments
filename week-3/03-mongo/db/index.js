const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://yyooggeesshh0011:hkKPZhmgb7SeSTeo@cluster0.n4rrafs.mongodb.net/dbAssignment');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    isAdmin: { type: Boolean, default: false},
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: {type: String, required: true},
    email: {type: String, required:true, unique: true},
    password: { type: String, required: true},
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: { type: String, required: true},
    description: { type: String, required: true},
    instructors: { type: String, required: true},
    students: { type: String, required: true},
    startDate: { type: Date, required: true},
    endDate: { type: Date, required: true},
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}