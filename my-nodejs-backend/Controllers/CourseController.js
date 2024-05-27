const CourseModel = require ('../Models/CourseSchema');

const getCourses = async (req,res)=>{
    try{
        const courses = await CourseModel.find()
        res.send(courses)
    }catch(err){
        console.error(err);
        return res.send('Error');
    }
}

const getCourseById = async (req,res)=>{
    try {
        const id = req.params.id;
        const course = await CourseModel.findById(id);
        
        if (!course) {
            return res.status(404).send("Course not found");
        }
        
        res.send(course);
    } catch (err) {
        console.error(err);
        return res.status(500).send('Server Error');
    }
}

const addCourse = async (req, res) => {
    try {
        const { Title, Description, Price, Image, Videos } = req.body;

        console.log(req.body);

        

        // Create a new course with the uploaded image URL and video URLs from Cloudinary
        const newCourse = await CourseModel.create({
            Image,
            Title,
            Description,
            Price,
            Videos
        });

        return res.status(201).json(newCourse);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Server Error");
    }
};


const updateCourse = async (req,res)=>{
    console.log(req.body);
    const { Title, Description, Price, Image, id } = req.body
    try{
    const course = await CourseModel.findOneAndUpdate({ _id: id }, {
        $set: {
            Title: Title,
            Description: Description,
            Price: Price,
            Image: Image
        }   
    })
    res.json(course);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Server Error");
    }
};

const deleteCourse = async (req,res)=>{
    console.log(req.body.id);
        await CourseModel.deleteOne({ _id: req.body.id })
        .then((course) => {res.send(course);})

        .catch((err) => res.send(err))
}

module.exports={getCourses , getCourseById , addCourse , updateCourse , deleteCourse };