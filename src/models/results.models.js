import mongoose from "mongoose"

const resultSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    marks: {
      type: Number,
      required: true,
    },
    semester: {
      type: Number,
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  },
  { timestamps: true }
)


const Result = mongoose.model("Result",resultSchema)

export default Result