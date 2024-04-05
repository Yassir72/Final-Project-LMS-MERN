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

exports.updateStudent = (req,res)=>{
    const {id}=req.params;
    const{name,email,password,username,phoneNumber}=req.body;
    const updatedStudent = StudentModel.findByIdAndUpdate(
        id,
        {$set : { name, email, password, username, phoneNumber }}
    );
    
    if(!updatedStudent){
        res.status(404).json({message:"Student not found !"})
        console.log('Cannot find user !');
    }
        
        res.json(updatedStudent);
        console.log('Student updated !')
}

exports.deleteStudent = (req,res)=>{
    const{id}=req.params;
    const deletedstudent= StudentModel.findByIdAndDelete(id);
    
    if(!deletedstudent){
        res.status(404).json({message:"Student not found !"})
    }

    res.json({message:'Student deleted !',deletedstudent})
    console.log('Student deleted successfully !')

}