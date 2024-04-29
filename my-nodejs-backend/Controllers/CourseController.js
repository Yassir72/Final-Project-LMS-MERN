const CourseModel = require ('../Models/CourseSchema');
const multer = require('multer');

const storage = multer.memoryStorage(); // Store files in memory as buffers
const upload = multer({ storage: storage });

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
        const { Title, Description, Price } = req.body;
        const { title, description, contentType } = req.file; // Assuming file upload middleware is used

        // Check if the course already exists
        const existingCourse = await CourseModel.findOne({ Title: Title });
        if (existingCourse) {
            return res.status(401).send("Course already exists!");
        }

        // Create a new course with video data
        const newCourse = await CourseModel.create({
            Title,
            Description,
            Price,
            Videos: [
                {
                    title,
                    description,
                    videoData: req.file.buffer, // Assuming the file upload middleware provides buffer data
                    contentType
                }
            ]
        });

        return res.status(201).json(newCourse);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Server Error");
    }
}


const updateCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const { Title, Description, Price } = req.body;
        const { title, description, contentType } = req.file; // Assuming file upload middleware is used

        // Find the course by ID and update it
        const updatedCourse = await CourseModel.findByIdAndUpdate(id, {
            $set: {
                Title,
                Description,
                Price,
                Videos: [
                    {
                        title,
                        description,
                        videoData: req.file.buffer, // Assuming the file upload middleware provides buffer data
                        contentType
                    }
                ]
            }
        }, { new: true });

        // Check if the course exists and return the updated course
        if (!updatedCourse) {
            return res.status(404).send("Course not found");
        }
        
        // Send the updated course as response
        res.json(updatedCourse);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Server Error");
    }
}

const deleteCourse = async (req,res)=>{
    const id = req.params.id;

    const course = await CourseModel.deleteOne({ id: id })
        .then((course) => res.send(course))
        .catch((err) => res.send(err))
}

module.exports={getCourses , getCourseById , addCourse , updateCourse , deleteCourse , upload};