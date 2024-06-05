const InstructorModel = require("../../Models/InstructorSchema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const SignUp = async (req, res) => {
    try {
        const { name, email, password, phonenumber, specialite, username, Image} = req.body;

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
            username,
            Image
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


const addInstructor = async (req,res)=>{
    try { console.log(req.body);
        const {name, password, email, phonenumber,specialite,username,Image} = req.body;

        const existingInstructor = await InstructorModel.findOne({ username: username });
        if (existingInstructor) {
            return res.status(401).send("User already exists!");
        }

        const newInstructor = await InstructorModel.create({
            name, password, email, phonenumber,specialite,username,Image
        });

        return res.status(201).json(newInstructor);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Server Error");
    }
}



const UpdateInstructor = async (req, res) => { console.log("here");

    const { name, email, phonenumber, specialite, username, id ,Image} = req.body
    console.log(id);
    await InstructorModel.findOneAndUpdate({ _id: id }, {
        $set: {
            name: name,
            email: email,
            phonenumber: phonenumber,
            specialite: specialite,
            username: username,
            Image: Image
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
        const instructor = await InstructorModel.findById(id).populate('courses');
        
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
    SignUp, SignIn, UpdateInstructor, deleteInstructor, getAllInstructor,getInstructorById, addInstructor
}