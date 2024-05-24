const{getCategorys , addCategory}=require('../Controllers/CategoryController')
const Router = require('express').Router()

Router.post('/addCategory',addCategory)
Router.get('/getCategorys',getCategorys)


module.exports=Router;