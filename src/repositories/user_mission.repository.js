// user_mission.repository.js
export const insertUserMission = async (pool, { userId, missionId }) => {
    const query = `INSERT INTO user_mission (user_id, mission_id, status) VALUES (?, ?, '도전 중')`;
    const [result] = await pool.execute(query, [userId, missionId]);
    return result.insertId;
};

export const checkUserAndMissionExistence = async (pool, userId, missionId) => {
    const userQuery = `SELECT id FROM user WHERE id = ?`;
    const missionQuery = `SELECT id FROM mission WHERE id = ?`;

    const [userRows] = await pool.execute(userQuery, [userId]);
    const [missionRows] = await pool.execute(missionQuery, [missionId]);

    return userRows.length > 0 && missionRows.length > 0;
};
