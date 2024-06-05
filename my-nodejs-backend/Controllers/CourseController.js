const CourseModel = require ('../Models/CourseSchema');
const InstructorModel = require("../Models/InstructorSchema");

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
        const { Title,id, Description, Price, Image, Videos } = req.body;

        console.log(req.body);

        

        // Create a new course with the uploaded image URL and video URLs from Cloudinary
        const newCourse = await CourseModel.create({
            Image,
            Title,
            Description,
            Price,
            Videos
        });

        const instructor = await InstructorModel.findById(id);

        await InstructorModel.deleteOne({ _id: id })
        .then((Instructor) => console.log(Instructor))
        .catch((err) => console.log(err))

        console.log("this is Instructor : " ,instructor);
        let courses = instructor.courses;
        courses.push({_id : newCourse._id})
        console.log("this newCourses :" ,courses);
        let newInstuctor = {
            _id : id,
            name : instructor.name,
            password : instructor.password,
            email : instructor.email,
            phonenumber : instructor.phonenumber,
            specialite : instructor.specialite,
            username : instructor.username,
            Image : instructor.Image,
            courses : courses
        }
        
        const LastInstructor = await InstructorModel.create(newInstuctor);

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