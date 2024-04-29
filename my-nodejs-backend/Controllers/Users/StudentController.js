const mongoose = require('mongoose');
const StudentModel = require("../../Models/StudentSchema")
// const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const register = async (req, res) => {
    const { firstname, lastname, email, password, username, phoneNumber } = req.body;
    const existingUser = await StudentModel.findOne({ email: email })
    console.log(existingUser);
    // const hashedpassword=hash.bcrypt(password,10);
    if (!existingUser) {
        const newStudent = await StudentModel.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            username: username,
            phoneNumber: phoneNumber
        })
        res.json(newStudent);
        console.log('Student created successfully !');
    } else {
        res.json({ message: 'Email already exists !' })
        console.log('Student already exists')
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const student = await StudentModel.findOne({ email,password });
        if (!student) {
            return res.status(404).json({ error: 'Email or password incorrect!' });
        }

        // const validPassword = await bcrypt.compare(password, student.password);
        // if (!validPassword) {
        //     return res.status(404).json({ error: 'Email or password incorrect!' });
        // }

        const token = jwt.sign({ student: student.id }, process.env.SECRET_KEY, { expiresIn: '2h' });
        return res.json({ message: 'Student logged in successfully!', token });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const logout = (req, res) => {
    res.clearCookie('jwtToken');
    res.json({ message: 'Logged out successfully' });
};

const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, email, password, username, phoneNumber } = req.body;
    
    // Build the update object
    const updateObj = {};
    if (firstname) updateObj.firstname = firstname;
    if (lastname) updateObj.lastname = lastname;
    if (email) updateObj.email = email;
    if (password) updateObj.password = password;
    if (username) updateObj.username = username;
    if (phoneNumber) updateObj.phoneNumber = phoneNumber;

    try {
        // Find the student by id and update with the update object
        const updatedStudent = await StudentModel.findByIdAndUpdate(id, updateObj, { new: true });

        if (!updatedStudent) {
            res.status(404).json({ message: "Student not found !" });
            console.log('Cannot find user !');
            return; // Return to avoid further execution
        }

        res.json(updatedStudent);
        console.log('Student updated !');
    } catch (error) {
        // Handle any potential errors
        console.error('Error updating student:', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


const deleteStudent = async (req, res) => {
    const { id } = req.params;
    const deletedstudent = await StudentModel.findByIdAndDelete(id);

    if (!deletedstudent) {
        res.status(404).json({ message: "Student not found !" })
    }

    res.json({ message: 'Student deleted !', deletedstudent })
    console.log('Student deleted successfully !')
}

const getStudents = async (req, res) => {
    const allStudents = await StudentModel.find();
    if (allStudents) {
       return res.json({ message: 'This is the list of all students :', allStudents })
        console.log('Students fetched successfully !');
    }
    return res.status(404).json("Error 404!")
    console.log('Error fetching students !')
}

const getStudentById =async (req, res) => {
    const studentId = req.params.id;
    const student =await StudentModel.findOne(studentId);

    if (!student) {
        res.status(404).json(error);
        console.log('Student not found !');
    }
    res.json({ message: 'The student is :', student })
    console.log('Student fetched successfully !');
}

module.exports = { register, login, logout, updateStudent, deleteStudent, getStudents, getStudentById };