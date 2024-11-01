const express = require("express")
const path = require("path")
const router = express.Router()
const { fixDeveloperModel, populateStories, populateUsers } = require(path.join(__dirname, "..", "controllers", "fixController"))
const { authMiddleware } = require(path.join(__dirname, "..", "middlewares", "authMiddleware.js"))
// router.get("/fix-developer-model", authMiddleware, isAdministrator, fixDeveloperModel)
router.get("/fix-developer-model", authMiddleware, fixDeveloperModel)
router.get("/fix-populate-stories", authMiddleware, populateStories)
router.get("/fix-populate-users", authMiddleware, populateUsers)
module.exports = router