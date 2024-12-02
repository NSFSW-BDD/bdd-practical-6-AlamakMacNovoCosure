// Import required modules
const express = require('express');
const router = express.Router();

// Import userRoutes, categoryRoutes, furnitureRoutes
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const furnitureRoutes = require('./furnitureRoutes');

// Define the routes
router.use("/user", userRoutes);
router.use("/category", categoryRoutes);
router.use("/furniture", furnitureRoutes);

// Export the Router
module.exports = router;