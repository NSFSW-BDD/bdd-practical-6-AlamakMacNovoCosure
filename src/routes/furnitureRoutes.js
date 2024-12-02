const express = require('express');
const router = express.Router();

// Import furnitureController module
const controller = require("../controllers/furnitureController");
// const furnitureController = require('../controllers/furnitureController');

//Define the routes and associate them with the corresponding
//controller functions

// router.get("/", controller.readAllFurniture);
router.get('/', (req, res) => {
    // Handle the GET request for all Furniture
    controller.readAllFurniture(req, res);
  });

// router.post('/',controller.createNewFurniture);
router.post('/', (req, res) => {
    // Handle the POST request for creating a new Furniture
    controller.createNewFurniture(req, res);
  });

// router.get('/:fid', controller.readFurnitureById);
router.get("/:fid", (req, res) => {
    controller.readFurnitureById(req, res);
})

// router.put('/:fid', controller.updateFurnitureById);
router.put("/:fid", (req, res, next) => {
    controller.updateFurnitureById(req, res);
})

// router.delete('/:fid', controller.deleteFurnitureById);
router.delete("/:fid", (req, res, next) => {
    controller.deleteFurnitureById(req, res);
})

// Export the router object
module.exports = router;

// const furnitureRoutes = require('./furnitureRoutes');
// router.use("/furniture", furnitureRoutes);
// module.exports = router;