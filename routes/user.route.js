const express = require("express");
const router = express.Router();
const middleware = require("../middleware/authMiddleware");

const userController = require("../controllers/user.controller");

router.post("/signIn", userController.userSignIn);
router.get("/all", userController.getUserList);
router.post("/", userController.createUser);
router.get("/:id", userController.getUserById);
router.patch("/:id", middleware.checkToken, userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
