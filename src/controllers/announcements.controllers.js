import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import Announcement from "../models/announcements.models.js"

const createAnnouncement = asyncHandler(async (req, res) => {
  // const validate

  const { title, message } = req.body

  const announcement = await Announcement.create({
    title,
    message,
    postedBy: req.user._id,
  })

  if (!announcement) throw new ApiError(500, "Internal server error")

  return res
    .status(201)
    .json(
      new ApiResponse(201, "announcement created successfully", announcement)
    )
})

// this is very basic can enhance it very much !!
const getAllAnnouncements = asyncHandler(async (req, res) => {
  const announcement = await Announcement.find()

  if (announcement.length === 0)
    throw new ApiError(
      500,
      "Internal server error | unable to fetch the announcements"
    )

  return res
    .status(200)
    .json(
      new ApiResponse(200, "annoucements fetched successfully", announcement)
    )
})

export { createAnnouncement, getAllAnnouncements }
