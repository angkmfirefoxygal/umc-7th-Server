import * as storeService from '../services/store.service.js';
import { StatusCodes } from 'http-status-codes';

// 가게 추가 핸들러
export const handleStoreUpload = async (req, res, next) => {
  try {
    const { region_id } = req.params; // URL에서 region_id 가져오기
    const storeData = { ...req.body, region_id }; // 요청 본문과 region_id 결합

    const addedStore = await storeService.addStoreService(storeData); // 서비스 호출

    return res.status(StatusCodes.CREATED).json({ success: true, store: addedStore }); // 성공 응답
  } catch (error) {
    console.error("가게 추가 중 오류 발생:", error);
    return res.status(StatusCodes.BAD_REQUEST).json({ success: false, error: error.message }); // 오류 응답
  }
};
