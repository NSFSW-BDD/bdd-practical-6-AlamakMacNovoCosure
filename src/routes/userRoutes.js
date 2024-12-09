// view is considered as the UI component that displays
// user-related information (eg, profiles, forms for creating or updating users)
// usually implemented using HTML templates or front-end frameworks
// that can render dynamic data received from the controller
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");


// Controller acts as intermediary between the model and the view
// handels incoming HTTP requests related to user (fetching, retrieving, creating,
// updating user info). Controller uses the user model to perform
// the neccessary operations on the use data, then passes the resulting data
// to view to render. 
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
router.post("/login", userController.loginUser,jwtMiddleware.generateToken,jwtMiddleware.sendToken);

module.exports =router;