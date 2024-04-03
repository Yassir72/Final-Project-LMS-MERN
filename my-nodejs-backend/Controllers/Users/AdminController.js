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



module.exports = signIn;