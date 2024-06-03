const mongoose = require('mongoose');
const StudentModel = require("../../Models/StudentSchema");
const InstructorModel = require("../../Models/InstructorSchema");
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { email, username, password, role } = req.body;

    try {
        const existingStudent = await StudentModel.findOne({ email });
        const existingInstructor = await InstructorModel.findOne({ email });

        if (existingStudent || existingInstructor) {
            return res.status(400).json({ message: 'Email already exists!' });
        }

        if (role !== 'Student' && role !== 'Instructor') {
            return res.status(400).json({ message: 'Invalid role! Role must be either "Student" or "Instructor".' });
        }

        let newUser;
        if (role === 'Student') {
            newUser = await StudentModel.create({
                email,
                password,
                username,
                role
            });
        } else if (role === 'Instructor') {
            newUser = await InstructorModel.create({
                email,
                password,
                username,
                role
            });
        }

        res.status(201).json(newUser);
        console.log(`${role} created successfully!`);
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Registration failed. Please try again later.' });
    }
}

// const login = async (req, res) => { 
//     const { email, password, role } = req.body;
//     let user;

//     try {
//         if (role === 'Student') { 
//             user = await StudentModel.findOne({ email });
            
//         } else if (role === 'Instructor') {
//             user = await InstructorModel.findOne({ email });
//         } else {
//             return res.status(400).json({ error: 'Invalid role provided' });
//         }

//         if (!user) {
//             return res.status(404).json({ error: 'Email or password incorrect!' });
//         }

//         // const isPasswordValid = await bcrypt.compare(password, user.password);
//         StudentPasswordValid = await StudentModel.findOne({ password });

//         InstructorPasswordValid = await InstructorModel.findOne({ password });
//         if (!StudentPasswordValid || !InstructorPasswordValid) {
//             return res.status(404).json({ error: 'Email or password incorrect!' });
//         }

//         const token = jwt.sign({ userId: user._id, accountType: role }, process.env.SECRET_KEY, { expiresIn: '2h' });
//         return res.json({ role: user.role , message: 'Logged in successfully!', token });
                
//     } catch (error) {
//         console.error('Error during login:', error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

const login = async (req, res) => { 
    const { email, password } = req.body;
    let user;
    let role;
    try {
        await StudentModel.findOne({email})
        .then((us)=>{ 
            if(us){
            role = 'Student';
            if(us.password==password) user = us;
            }
        })
        if(!role){
        await InstructorModel.findOne({email})
        .then((us)=>{
            
            if(us){
            role = 'Instructor';
            if(us.password==password) user = us;
            }
        })
        }

        const token = jwt.sign({ userId: user._id, accountType: role }, process.env.SECRET_KEY, { expiresIn: '2h' });
        return res.json({ role: user.role , message: 'Logged in successfully!', token });
                
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { register,login };
