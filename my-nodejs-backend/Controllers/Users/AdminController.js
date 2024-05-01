const mongoose = require('mongoose');
const AdminModel = require("../../Models/AdminSchema")
const jwt = require('jsonwebtoken')
const bcrypt=require('bcrypt')


// function signIn(req,res){  
//     AdminModel.findOne({Email : req.body.Email})
//             .then((user)=>{ console.log(user);
//                 if(!user) res.send('incorrect username')
//                 else {
//                     if(user.Password != req.body.Password) res.send('Incorrect Password')
//                     else res.redirect('/home')
//                 }
//             })
//             .catch((error)=>console.log("Error: ",error))
        
//     }

// function signIn (req, res){
//         const { Email, Password} = req.body;
//         try {
//             const admin = AdminModel.findOne({ Email:Email});
//             if (!admin) {
//                 return res.status(404).json({ error: 'Email or password incorrect!' });
//             }
    
//             const validPassword = bcrypt.compare(Password, admin.Password);
//             if (!validPassword) {
//                 return res.status(404).json({ error: 'Email or password incorrect!' });
//             }
    
//             const token = jwt.sign({ admin: admin.id }, process.env.SECRET_KEY, { expiresIn: '2h' });
//             return res.json({ message: 'Admin logged in successfully!', token });
//         } catch (error) {
//             console.error('Error during login:', error);
//             return res.status(500).json({ error: 'Internal Server Error' });
//         }
//     };   
    const signIn = async (req, res) => { 
            const { Email, Password } = req.body;
            console.log(Email);
            
            try {
                const admin = await AdminModel.findOne({ Email : Email , Password : Password })
                if (!admin) { console.log("hh");
                    return res.status(404).json({ error: 'Email or password incorrect!' });
                }
        
                // const validPassword = await bcrypt.compare(Password, admin.Password);
                // if (!validPassword) {
                //     return res.status(404).json({ error: 'Email or password incorrect!' });
                // }
        
                const token = jwt.sign({ admin: admin.id }, process.env.SECRET_KEY, { expiresIn: '2h' });
                return res.json({ message: 'Admin logged in successfully!', token });
            } catch (error) {
                console.error('Error during login:', error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
        };
        


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


    // const addAdmin = async (req, res) => {
    //     const { Name, Email, Password } = req.body;
    //     const existingUser = await AdminModel.findOne({ Email: Email })
    //     console.log(existingUser);
    //     const hashedpassword = await hash.bcrypt(Password,10);
    //     if (!existingUser) {
    //         const newAdmin = await AdminModel.create({
    //             Name,
    //             Email,
    //             Password: hashedpassword,
                
    //         })
    //         res.json(newAdmin);
    //         console.log('Admin created successfully !');
    //     } else {
    //         res.json({ message: 'Email already exists !' })
    //         console.log('Student already exists')
    //     }
    //     }

    
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