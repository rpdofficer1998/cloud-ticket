const pool = require("../config/db");

const getAllEvents = async () => {
    const result = await pool.query(
    "SELECT * FROM events ORDER BY id"
);

return result.rows;
};

module.exports = {
    getAllEvents
};