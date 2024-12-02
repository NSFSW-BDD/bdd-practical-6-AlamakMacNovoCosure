// const pool = require('../services/db');

// define the structure of the user data and provide methods
// for interacting with th euser data in the database.
// include operations (fetching (get), creating(post), updating(put), deleting(delete))
const pool = require("../services/db");


var userModel = {
    getAllUsers: (callback) => {
        const SQLSTATEMENT = `
    SELECT * FROM user;
    `;

        pool.query(SQLSTATEMENT, callback);
    },

    getUserById: (data, callback) => {
        const SQLSTATEMENT = `
    SELECT * FROM user
    WHERE userid = ?;
    `;
        const VALUES = [data.userid];

        pool.query(SQLSTATEMENT, VALUES, callback);
    },

    insertNewUser: (data, callback) => {
        const SQLSTATEMENT = `
    INSERT INTO user (username, email,role,password)
    VALUES (?,?,?,?);
    `;
        const VALUES = [data.username, data.email, data.role, data.password];

        pool.query(SQLSTATEMENT, VALUES, callback);
    },

    updateUserById: (data, callback) => {
        const SQLSTATEMENT = `
    UPDATE user
    SET email=?, password=?
    WHERE userid=?;
    `;
        const VALUES = [data.email, data.password, data.userid];

        pool.query(SQLSTATEMENT, VALUES, callback);
    },

    deleteUserById: (data, callback) => {
        const SQLSTATEMENT = `
    DELETE FROM user
    WHERE userid = ?
  `;
        const VALUES = [data.userid];

        pool.query(SQLSTATEMENT, VALUES, callback);
    },

    //authetication
    loginUser: (data, callback) => {

        const SQLSTATMENT = `select * from user where email=? and password=?`;

        const VALUES = [data.email, data.password];

        pool.query(SQLSTATMENT, VALUES, callback);

    }
};

module.exports = userModel;

