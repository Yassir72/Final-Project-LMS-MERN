const mongoose = require('mongoose');
const AdminModel = require("../../Models/AdminSchema")


function signIn(req,res){  
    AdminModel.findOne({Email : req.body.Email})
            .then((user)=>{ console.log(user);
                if(!user) res.send('incorrect username')
                else {
                    if(user.Password != req.body.Password) res.send('Incorrect Password')
                    else res.redirect('/home')
                }
            })
            .catch((error)=>console.log("Error: ",error))
        
    }

const addAdmin = async (req, res) => {
        try {
            const { Name, Email, Password } = req.body;
            const existAdmin = await AdminModel.findOne({ Email: Email });
    
            if (existAdmin) {
                return res.status(401).send("Admin already exists!");
            } else {
                const newAdmin = await AdminModel.create({
                    Name,
                    Email,
                    Password
                });
                return res.status(201).json(newAdmin);
            }
        } catch (err) {
            console.error(err);
            return res.status(500).send("Server Error");
        }
    }
    
const UpdateAdmin = async (req, res) => {
        const id = req.params.id;
        const { name, email, password } = req.body
    
        const Admin = await AdminModel.findOneAndUpdate({ id: id }, {
            $set: {
                name: name,
                email: email,
                password: password,
            }
        },
            { new: true })
            .then((admin) => res.send(admin))
            .catch((err) => res.send(err))
    }
    
    
const deleteAdmin = async (req, res) => {
        const id = req.params.id;
    
        const admin = await InstructorModel.deleteOne({ id: id })
            .then((admin) => res.send(admin))
            .catch((err) => res.send(err))
    }

const getAllAdmins = async (req, res) => {
        try {
            const Admins = await AdminModel.find();
            res.send(Admins);
    
        } catch (err) {
            console.error(err);
            return res.send('Error');
        }
    }


module.exports = {signIn,addAdmin,UpdateAdmin,deleteAdmin,getAllAdmins};