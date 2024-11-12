// review.dto.js
export const validateReviewDto = (data) => {
    const { userId, storeId, body, score } = data;
  
    if (!userId || !storeId) {
      return "userId and storeId are required.";
    }
    if (typeof userId !== "number" || typeof storeId !== "number") {
      return "userId and storeId must be numbers.";
    }
    if (!body || typeof body !== "string") {
      return "Review body must be a valid string.";
    }
    if (typeof score !== "number" || score < 0 || score > 5) {
      return "Score must be a number between 0 and 5.";
    }
  
    return null; // 검증 성공
  };
  