const model = require("../models/categoryModel");

var categoryController = {
    readAllCategory: (req, res, next) => {
        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error readAllCategory:", error);
                res.status(500).json(error);
            } else res.status(200).json(results);
        }

        model.getAllCategory(callback);
    }

    , readCategoryById: (req, res, next) => {
        const data = {
            catid: req.params.catid
        }

        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error readCategoryById:", error);
                res.status(500).json(error);
            } else {
                if (results.length == 0) {
                    res.status(404).json({
                        message: "Category not found"
                    });
                }
                else res.status(200).json(results[0]);
            }
        }

        model.getFurnitureById(data, callback);
    }

    , createNewFurniture: (req, res, next) => {
        const data = {
            catid: req.category[req.category.length - 1].catid + 1,
            name: req.body.name,
            description: req.body.description,
        }

        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error createNewCategory:", error);
                res.status(500).json(error);
            } else {
                res.status(201).json(results);
            }
        }

        model.insertNewCategory(data, callback);
    }

    , updateCategoryById: (req, res, next) => {

        const data = {
            catid: req.category[req.category.length - 1].catid + 1,
            name: req.body.name,
            description: req.body.description,
        }

        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error updateCategoryById:", error);
                res.status(500).json(error);
            } else {
                if (results.affectedRows == 0) {
                    res.status(404).json({
                        message: "Category not found"
                    });
                }
                else res.status(204).send(); // 204 No Content
            }
        }

        model.updateCategoryById(data, callback);
    }

    , deleteCategoryById: (req, res, next) => {
        const data = {
            fid: req.params.fid
        }

        const callback = (error, results, fields) => {
            if (error) {
                console.error("Error deleteCategoryById:", error);
                res.status(500).json(error);
            } else {
                if (results.affectedRows == 0) {
                    res.status(404).json({
                        message: "Category not found"
                    });
                }
                else res.status(204).send(); // 204 No Content            
            }
        }

        model.deleteCategoryById(data, callback);
    }
}

module.exports = categoryController;
