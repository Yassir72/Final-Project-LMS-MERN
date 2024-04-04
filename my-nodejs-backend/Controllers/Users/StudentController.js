const mongoose = require('mongoose');
const StudentModel = require("../../Models/StudentSchema")


exports.register= (req,res)=>{
      const{name,email,password,username,phoneNumber}=req.body;
      const existingUser=StudentModel.findOne({email:email})
      if(existingUser){
        res.json({message: 'Email already exists !'})
        console.log('Student already exists')
      }else{
        const newStudent= StudentModel.create({
            name : name,
            email: email,
            password: password,
            username: username,
            phoneNumber: phoneNumber
        })
        res.json(newStudent);
        console.log('Student created successfully !');
      }
}

exports.login=(req,res)=>{
    const{email,password}=req.body;
    const student= StudentModel.findOne({email,password});
    if(student){
        res.json(student);
        console.log('Student logged in successfully !')
    }else{
        res.status(404).json(error);
        console.log('Email or password Incorrect !')
    }
}

exports.logout = (req, res) => {
    res.clearCookie('jwtToken');
    res.json({ message: 'Logged out successfully' });
};


