const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.get("/all", userController.getUserList);
router.post("/", userController.createUser);
router.get("/:id", userController.getUserById);
router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
