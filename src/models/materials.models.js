import mongoose from "mongoose"

const materialSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  attachments: [
    {
      type: String,
      required: true,
    },
  ],
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
})

const Material = mongoose.model("Material", materialSchema)

export default Material
