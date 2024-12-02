const pool = require("../services/db");

var furnitureModel ={
    getAllFurnitures: (callback) => {
        const SQLSTATEMENT = `
        SELECT * FROM furniture;
        `;

        pool.query(SQLSTATEMENT, callback);
    },

    getFurnitureById: (data, callback) => {
        const SQLSTATEMENT =`
        SELECT * FROM furniture
        WHERE fid = ?;
        `;
        const VALUES = [data.fid];

        pool.query(SQLSTATEMENT, VALUES, callback);
    },

    insertNewFurniture: (data, callback) => {
        const SQLSTATEMENT = `
        INSERT INTO furniture (name, description, price, quantity, catid)
        VALUES (?,?,?,?,?);
        `;
        const VALUES = [data.name, data.description, data.price, data.quantity, data.catid];

        pool.query(SQLSTATEMENT, VALUES, callback);
    },

    updateFurnitureById: (data, callback) => {
        const SQLSTATEMENT = `
        UPDATE furniture
        SET price=?, quantity=?
        WHERE fid=?;
        `;
        const VALUES = [data.name, data.description, data.price, data.quantity, data.catid];

        pool.query(SQLSTATEMENT, VALUES, callback);
    },

    deleteFurnitureById: (data, callback) => {
        const SQLSTATEMENT = `
        DELETE FROM furniture
        WHERE fid =?
        `;
        const VALUES = [data.fid];

        pool.query(SQLSTATEMENT, VALUES, callback);
    },
}

module.exports = furnitureModel;