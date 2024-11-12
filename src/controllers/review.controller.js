import { reviewUpload } from "../services/review.service.js";
import { validateReviewDto } from "../dtos/review.dto.js";
// POST /api/v1/reviews
export const handleReviewUpload = async (req, res) => {
  const pool = req.app.get("pool"); // pool 형태로 DB 연결

  try {
    const { userId, storeId, body, score } = req.body;

    // DTO 검증
    const validationError = validateReviewDto(req.body);
    if (validationError) {
      return res.status(400).json({ message: validationError });
    }

    // 서비스 호출
    await reviewUpload(pool, userId, storeId, body, score);
    return res.status(201).json({ message: "Review added successfully!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "An error occurred while adding the review." });
  }
};

