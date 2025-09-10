import { Router } from "express"
import { verifyJWT, verifyRole } from "../middlewares/auth.middleware.js"

const router = Router()
router.use(verifyJWT)

import {
  getAllAnnouncements,
  createAnnouncement,
} from "../controllers/announcements.routes.js"

router
  .route("/")
  .get(getAllAnnouncements)
  .post(verifyRole(["ADMIN", "FACULTY"]), createAnnouncement)

export default router
