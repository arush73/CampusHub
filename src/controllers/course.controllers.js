import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import Course from "../models/courses.models.js"
import Material from "../models/materials.models.js"

const addCourse = asyncHandler(async (req, res) => {
    // const validate 
    
    const { name, courseCode, teacher, semester } = req.body
    
    const course = await Course.create({ name, courseCode, teacher, semester })
    
    if(!course) throw new ApiError(500, "Internal server error | failed to add the course",course )

    return res.status(201).json(new ApiResponse(201, "course created successfully", course))

})

const getCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find()

    if(courses.length === 0) throw new ApiError(404, "courses not found")

        return res.status(200).json(new ApiResponse(200, "courses fetched successfully", courses))
})

const addMaterial = asyncHandler(async (req, res) => {
    // const validate 
    const {title} = req.body
    const {courseId} = req.params

    if (!courseId) throw new ApiError(400, "courseId not found in the req params")
    
    // add to cloudinary

    const material = await Material.create({
        title,
        course: courseId,
        // attachments: 
        uploadedBy: req.user._id
    }) 
    
})

const getMaterials = asyncHandler(async (req, res) => {})

export { getCourses, addCourse, getMaterials, addMaterial }
