import { Router } from "express"
import { verifyJWT, verifyRole } from "../middlewares/auth.middleware.js"

const router = Router()
router.use(verifyJWT)

import {
  getCourses,
  addCourse,
  getMaterials,
  addMaterial,
} from "../controllers/course.controllers.js"

router
  .route("/")
  .get(getCourses)
  .post(verifyRole(["ADMIN"]), addCourse)

router
  .route("/:courseId/materials")
  .get(getMaterials)
  .post(verifyRole(["FACULTY", "ADMIN"]), addMaterial)

export default router
