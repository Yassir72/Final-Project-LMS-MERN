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

const addCourse = async (req,res)=>{
    try {
        const { Title , Description , Price } = req.body;

        const existingCourse = await InstructorModel.findOne({ Title: Title });
        if (existingCourse) {
            return res.status(401).send("Course already exists!");
        }

        const newCourse = await CourseModel.create({
           Title,
           Description,
           Price
        });

        return res.status(201).json(newCourse);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Server Error");
    }
}

const updateCourse = async (req,res)=>{
    const id = req.params.id;
    const { Title, Description, Price } = req.body

    const course = await CourseModel.findOneAndUpdate({ id: id }, {
        $set: {
            Title: Title,
            Description: Description,
            Price: Price,
        }
    },
        { new: true })
        .then((course) => res.send(course))
        .catch((err) => res.send(err))
}

const deleteCourse = async (req,res)=>{
    console.log(req.body.id);
        await CourseModel.deleteOne({ _id: req.body.id })
        .then((course) => {res.send(course);})
        .catch((err) => res.send(err))
}

module.exports={getCourses , getCourseById , addCourse , updateCourse , deleteCourse};