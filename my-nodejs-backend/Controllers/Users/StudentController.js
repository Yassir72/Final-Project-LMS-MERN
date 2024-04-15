const mongoose = require('mongoose');
const StudentModel = require("../../Models/StudentSchema")
const bcrypt=require('bcrypt');
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
    res.json({ message: 'Logged out successfully' });
};

const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, email, password, username, phoneNumber } = req.body;
    const updatedStudent =await StudentModel.findByIdAndUpdate(
        id,
        { firstname, lastname, email, password, username, phoneNumber }
    );

    if (!updatedStudent) {
        res.status(404).json({ message: "Student not found !" })
        console.log('Cannot find user !');
    }

    res.json(updatedStudent);
    console.log('Student updated !')
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
        res.json({ message: 'This is the list of all students :', allStudents })
        console.log('Students fetched successfully !');
    }
    res.status(404).json(error)
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