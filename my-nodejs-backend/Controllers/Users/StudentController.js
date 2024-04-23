const mongoose = require('mongoose');
const StudentModel = require("../../Models/StudentSchema")


const register= (req,res)=>{
      const{firstname,lastname,email,password,username,phoneNumber}=req.body;
      const existingUser=StudentModel.findOne({email:email})
      if(existingUser){
        res.json({message: 'Email already exists !'})
        console.log('Student already exists')
      }else{
        const newStudent= StudentModel.create({
            firstname : firstname,
            lastname : lastname,
            email: email,
            password: password,
            username: username,
            phoneNumber: phoneNumber
        })
        res.json(newStudent);
        console.log('Student created successfully !');
      }
}

const login=(req,res)=>{
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

const logout = (req, res) => {
    res.clearCookie('jwtToken');
    res.json({ message: 'Logged out successfully' });
};

const updateStudent = (req,res)=>{
    const {id}=req.params;
    const{firstname,lastname,email,password,username,phoneNumber}=req.body;
    const updatedStudent = StudentModel.findByIdAndUpdate(
        id,
        {$set : { firstname, lastname, email, password, username, phoneNumber }}
    );
    
    if(!updatedStudent){
        res.status(404).json({message:"Student not found !"})
        console.log('Cannot find user !');
    }
        
        res.json(updatedStudent);
        console.log('Student updated !')
}

const deleteStudent = (req,res)=>{
    const{id}=req.params;
    const deletedstudent= StudentModel.findByIdAndDelete(id);
    
    if(!deletedstudent){
        res.status(404).json({message:"Student not found !"})
    }

    res.json({message:'Student deleted !',deletedstudent})
    console.log('Student deleted successfully !')

}

module.exports={login,register,logout,updateStudent,deleteStudent}