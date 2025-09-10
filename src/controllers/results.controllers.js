import { asyncHandler } from "../utils/asyncHandler"
import { ApiResponse } from "../utils/ApiResponse"
import { ApiError } from "../utils/ApiError"
import Result from "../models/results.models"
import { UserRolesEnum } from "../constants"

const addResult = asyncHandler(async (req, res) => {
  //   const validate =

  const { studentId, marks, courseId, semester } = req.body

  const result = await Result.create({
    student: studentId,
    course: courseId,
    semester,
    marks,
  })

  if (!result)
    throw new ApiError(
      500,
      "Internal Server Error | failed to upload the result"
    )

  return res.status(200).json(201, "result added successfully", result)
})

const getResult = asyncHandler(async (req, res) => {
  const { studentId } = req.params
  if (!studentId)
    throw new ApiError(400, "studentId not found in the req params")

  const result = await Result.findById(studentId)

  if (!result) throw new ApiError(500, "Internal server error")

  if (req.user.role === UserRolesEnum.ADMIN)
    return res.status(200).json(200, "result fetched successfully", result)

  if (result.student.toString() !== req.user._id.toString())
    throw new ApiError(401, "invalid request | unauthorised")

  return res.status(200).json(200, "result fetched successfully", result)
})

export { getResult, addResult }
