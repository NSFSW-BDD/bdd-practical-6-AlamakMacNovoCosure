const pool = require("../services/db");

var categoryModel = {
    getAllCategory: (callback) => {
        const SQLSTATEMENT = `
        SELECT * FROM category;
        `;

        pool.query(SQLSTATEMENT, callback);
    },

    getCategoryById: (data, callback) => {
        const SQLSTATEMENT = `
        SELECT * FROM category
        WHERE catid = ?;
        `;
        const VALUES = [data.catid];

        pool.query(SQLSTATEMENT, VALUES, callback);
    },

    insertNewCategory: (data, callback) => {
        const SQLSTATEMENT = `
        INSERT INTO category (name, description)
        VALUES (?,?);
        `;
        const VALUES = [data.name, data.description];

        pool.query(SQLSTATEMENT, VALUES, callback);
    },

    updateCategoryById: (data, callback) => {
        const SQLSTATEMENT = `
        UPDATE category
        SET name=?, description=?
        WHERE catid = ?;
        `;
        const VALUES = [data.name, data.description, data.catid];

        pool.query(SQLSTATEMENT, VALUES, callback);
    },

    deleteCategoryById: (data, callback) => {
        const SQLSTATEMENT = `
        DELETE FROM category
        WHERE catid=?
        `;
        const VALUES = [data.catid];

        pool.query(SQLSTATEMENT, VALUES, callback);
    },
};

module.exports = categoryModel;
