const furnitureModel = require("../models/furnitureModel");
// const model = require("../models/furnitureModel");

var furnitureController = {
    readAllFurniture: (req, res, next) => {
        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error readAllFurniture:", error);
                res.status(500).json(error);
            } else res.status(200).json(results);
        }

        furnitureModel.getAllFurnitures(callback);
    }

    , readFurnitureById: (req, res, next) => {
        const data = {
            fid: req.params.fid
        }

        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error readFurnitureById:", error);
                res.status(500).json(error);
            } else {
                if (results.length == 0) {
                    res.status(404).json({
                        message: "Furniture not found"
                    });
                }
                else res.status(200).json(results[0]);
            }
        }

        furnitureModel.getFurnitureById(data, callback);
    }

    , createNewFurniture: (req, res, next) => {
        const data = {
            fid: req.body.fid,
            name: req.body.name,
            description: req.body.description,
            quantity: req.body.quantity,
            price: req.body.price,
            image: req.body.image,
            catid: req.body.catid,
        }

        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error createNewUser:", error);
                res.status(500).json(error);
            } else {
                res.status(201).json(results);
            }
        }

        furnitureModel.insertNewFurniture(data, callback);
    }

    , updateFurnitureById: (req, res, next) => {

        const data = {
            catid: req.body.catid,
            quantity: req.body.quantity,
            price: req.body.price,
            
        }

        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error updateFurnitureById:", error);
                res.status(500).json(error);
            } else {
                if (results.affectedRows == 0) {
                    res.status(404).json({
                        message: "Furniture not found"
                    });
                }
                else res.status(201).json(results); // 204 No Content
            }
        }

        furnitureModel.updateFurnitureById(data, callback);
    }

    , deleteFurnitureById: (req, res, next) => {
        const data = {
            fid: req.params.fid
        }

        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error deleteFurnitureById:", error);
                res.status(500).json(error);
            } else {
                if (results.affectedRows == 0) {
                    res.status(404).json({
                        message: "Furniture not found"
                    });
                }
                else res.status(204).send(); // 204 No Content            
            }
        }

        furnitureModel.deleteFurnitureById(data, callback);
    }
}

module.exports = furnitureController;
