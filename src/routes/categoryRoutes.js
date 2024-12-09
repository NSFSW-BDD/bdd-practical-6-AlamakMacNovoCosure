const express = require('express');
const router = express.Router();

// const controller = require('../controllers/categoryController');
const categoryController = require('../controllers/categoryController');

// Define the routes and associate them with the corresponding
//controller functions

//router.get("/", controller.readAllCategory);
router.get("/", (req, res) => {
    // Handle the GET request for all category
    categoryController.readAllCategory(req, res);
});

// router.post("/", controller.createNewCategory);
router.post("/", (req, res) => {
    categoryController.createNewCategory(req, res);
});

// router.get("/:catid", controller.readCategoryById);
router.get("/:catid", (req, res) => {
    categoryController.readCategoryById(req, res);
});

// router.put("/:category", controller.updateCategoryById);
router.put("/:catid", (req, res) => {
    categoryController.updateCategoryById(req, res);
});

// router.delete("/:category", controller.deleteCategoryById);
router.delete("/:catid", (req, res) => {
    categoryController.deleteCategoryById(req, res);
});

// Export the router object
module.exports = router;

// const categoryRoutes = require('./categoryRoutes');
// router.use("/category", categoryRoutes);
// module.exports = router;