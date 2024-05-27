const CategoryModel = require ('../Models/CategorySchema');

const getCategorys = async (req,res)=>{
    try{
        const category = await CategoryModel.find()
        res.send(category)
    }catch(err){
        console.error(err);
        return res.send('Error');
    }
}

const addCategory = async (req,res)=>{
    try {
        const { name,image } = req.body;

        const existingCategory = await CategoryModel.findOne({ name });
        if (existingCategory) {
            return res.status(401).send("category already exists!");
        }

        const newCategory = await CategoryModel.create({
            name : name,
            image : image,
        });

        return res.status(201).json(newCategory);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Server Error");
    }
}




module.exports={getCategorys , addCategory };