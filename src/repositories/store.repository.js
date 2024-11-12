

import { pool } from "../db.config.js";

// Store 데이터 삽입
export const addStore = async (data) => {
    const conn = await pool.getConnection();

    try {
        // 동일한 이름의 가게가 존재하는지 확인
        const [confirm] = await conn.query(
            `SELECT EXISTS(SELECT 1 FROM store WHERE name = ? AND region_id = ?) as isExistStore;`,
            [data.name, data.region_id]
        );

        // 가게가 이미 존재하는 경우
        if (confirm[0].isExistStore) {
            return null;
        }

        // 가게 데이터 삽입
        const [result] = await conn.query(
            `INSERT INTO store (region_id,name, address, score) VALUES (?, ?, ?, ?);`,
            [
                data.region_id,
                data.name,
                data.address,
                data.score,
            ]
        );

        return result.insertId; // 새로 생성된 가게의 ID 반환
    } catch (err) {
        throw new Error(
            `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
        );
    } finally {
        conn.release();
    }
};

