const express = require("express");
const userController = require("../controllers/userController");
const jwtMiddleware = require("../middlewares/jwtMiddleware");
const router = express.Router();

router.post("/login", userController.loginUser, jwtMiddleware.generateToken, jwtMiddleware.sendToken);

router.get('/', (req, res) => {
    userController.readAllUser(req, res);
});

router.post('/', (req, res) => {
    userController.createNewUser(req, res)
});
router.get('/:userid', (req, res) => {
    userController.readUserById(req, res);
});
router.put('/:userid', (req, res) => {
    userController.updateUserById(req, res)
});
router.delete('/:userid', (req, res) => {
    userController.deleteUserById(req, res)
});

module.exports = router;