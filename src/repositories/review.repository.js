// review.repository.js

// 리뷰 추가 함수
export const addReview = async (pool, userId, storeId, body, score) => {
    const query = `
      INSERT INTO review (user_id, store_id, body, score)
      VALUES (?, ?, ?, ?);
    `;
  
    try {
      const [result] = await pool.query(query, [userId, storeId, body, score]);
      return result;
    } catch (err) {
      throw new Error(`Failed to add review: ${err.message}`);
    }
  };
  
  // store_id 존재 여부 확인 함수
  export const isStoreExist = async (pool, storeId) => {
    const query = `
      SELECT COUNT(*) AS count
      FROM store
      WHERE id = ?;
    `;
  
    try {
      const [[{ count }]] = await pool.query(query, [storeId]);
      return count > 0; // 존재하면 true 반환
    } catch (err) {
      throw new Error(`Failed to check store existence: ${err.message}`);
    }
  };
  