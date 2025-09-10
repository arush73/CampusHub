import {Router} from "express"
import { verifyJWT } from "../middlewares/auth.middleware"

const router = Router()
router.use(verifyJWT)

import {
    addResult,
    getResults
} from "../controllers/results.controllers.js"

router.route("/").post(addResult)
router.route("/:courseId").get(getResults)

export default router