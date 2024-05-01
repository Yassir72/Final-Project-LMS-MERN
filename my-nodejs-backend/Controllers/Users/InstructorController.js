const InstructorModel = require("../../Models/InstructorSchema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const SignUp = async (req, res) => {
    try {
        const { name, email, password, phonenumber, specialite, username } = req.body;

        const existInstructor = await InstructorModel.findOne({ email: email });
        if (existInstructor) {
            return res.status(401).send("Instructor already exists!");
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await InstructorModel.create({
            name,
            email,
            password : hashPassword ,
            phonenumber,
            specialite,
            username
        });

        return res.status(201).json(newUser);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Server Error");
    }
}

const SignIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        const instructor = await InstructorModel.findOne({ email: email });
        if (!instructor) {
            return res.status(401).send("Instructor not found");
        }
        
        const validPassword = await bcrypt.compare(password, instructor.password);
        if (!validPassword) {
            return res.status(401).send("Password incorrect" );
        }
        
        const token = jwt.sign({ instructor: instructor.id }, (process.env.SECRET_KEY), { expiresIn: '1h' });
        res.status(200).json({ message: "Login successful", token : token });
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
};


const UpdateInstructor = async (req, res) => {
    const id = req.params.id;
    const { name, email, password, phonenumber, specialite, username } = req.body

    const Instructor = await InstructorModel.findOneAndUpdate({ id: id }, {
        $set: {
            name: name,
            email: email,
            password: password,
            phonenumber: phonenumber,
            specialite: specialite,
            username: username
        }
    },
        { new: true })
        .then((Instructor) => res.send(Instructor))
        .catch((err) => res.send(err))
}


const deleteInstructor = async (req, res) => {

    await InstructorModel.deleteOne({ _id: req.body.id })
        .then((Instructor) => res.send(Instructor))
        .catch((err) => res.send(err))
}


const getAllInstructor = async (req, res) => {
    try {
        const Instructor = await InstructorModel.find();
        res.send(Instructor)

    } catch (err) {
        console.error(err);
        return res.send('Error');
    }
}


const getInstructorById = async (req, res) => {
    try {
        const id = req.params.id;
        const instructor = await InstructorModel.findById(id);
        
        if (!instructor) {
            return res.status(404).send("Instructor not found");
        }
        
        res.send(instructor);
    } catch (err) {
        console.error(err);
        return res.status(500).send('Server Error');
    }
}



module.exports = {
    SignUp, SignIn, UpdateInstructor, deleteInstructor, getAllInstructor,getInstructorById,
}