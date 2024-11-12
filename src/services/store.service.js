import * as storeRepository from '../repositories/store.repository.js';
import { bodyToStore } from '../dtos/store.dto.js';

export const addStoreService = async (storeData) => {
  try {
    // DTO를 사용하여 입력 데이터를 변환 및 유효성 검사
    const store = bodyToStore(storeData);
    
    // 레포지토리를 통해 가게 추가
    const addedStore = await storeRepository.addStore(store);
    
    return addedStore; // 추가된 가게 정보 반환
  } catch (error) {
    console.error("가게 추가 서비스에서 오류 발생:", error);
    throw new Error("가게 추가에 실패했습니다."); // 오류 발생 시 메시지 반환
  }
};

