// view is considered as the UI component that displays
// user-related information (eg, profiles, forms for creating or updating users)
// usually implemented using HTML templates or front-end frameworks
// that can render dynamic data received from the controller
const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");


// Controller acts as intermediary between the model and the view
// handels incoming HTTP requests related to user (fetching, retrieving, creating,
// updating user info). Controller uses the user model to perform
// the neccessary operations on the use data, then passes the resulting data
// to view to render. 
router.get('/', (req, res) => {
    controller.readAllUser(req, res);
});
router.post('/', (req, res) => {
    controller.createNewUser(req, res)
});


router.get('/:userid', (req, res) => {
    controller.readUserById(req, res);
});
router.put('/:userid', (req, res) => {
    controller.updateUserById(req, res)
});
router.delete('/:userid', (req, res) => {
    controller.deleteUserById(req, res)
});

router.post("/login",(req, res) => {
    controller.loginUser(req, res, (err, user) => {
        if (err) {
            return res.status(401).json ({ message: "Credentials Invalid"})
        }
        
        const token = jwtMiddleware.generateToken(user); // Generate token using user data
        jwtMiddleware.sendToken(res, token) // Send token in the response
    
    });
    
});

module.exports =router;