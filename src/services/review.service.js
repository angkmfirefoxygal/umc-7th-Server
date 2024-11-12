// review.service.js
import { addReview, isStoreExist } from "../repositories/review.repository.js";

// 리뷰 업로드 서비스
export const reviewUpload = async (pool, userId, storeId, body, score) => {
  try {
    // store_id가 유효한지 확인
    const storeExists = await isStoreExist(pool, storeId);
    if (!storeExists) {
      throw new Error(`Store with ID ${storeId} does not exist.`);
    }

    // 리뷰 추가
    await addReview(pool, userId, storeId, body, score);
  } catch (err) {
    throw new Error(`Review upload failed: ${err.message}`);
  }
};
