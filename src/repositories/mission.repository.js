// mission.repository.js
//const pool = require('./db'); // Assume pool is a configured instance of a database connection pool

import { pool } from "../db.config.js";

export async function insertMission(pool, { storeId, reward, deadline, missionSpec }) {
    console.log("Inserting Mission with values:", { storeId, reward, deadline, missionSpec });
    const query = `INSERT INTO mission (store_id, reward, deadline, mission_spec) VALUES (?, ?, ?, ?)`;
    if (!storeId || !reward || !deadline || !missionSpec) {
        throw new Error("Insert Mission: Missing required fields.");
    }
    const [result] = await pool.execute(query, [storeId, reward, deadline, missionSpec]);
    return result.insertId;
}

export async function findStoreById(pool, storeId) {
    const query = `SELECT id FROM store WHERE id = ?`;
    try {
        const [rows] = await pool.execute(query, [storeId]);
        return rows.length > 0;
    } catch (error) {
        console.error("Error in findStoreById:", error);
        throw error;
    }
}
