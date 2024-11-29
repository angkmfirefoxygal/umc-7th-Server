// store.dto.js

export const bodyToStore = (body) => {
    // 필드 유효성 검사
    if (!body.name || typeof body.name !== 'string') {
      throw new Error("가게 이름은 필수입니다.");
    }
    if (!body.address || typeof body.address !== 'string') {
      throw new Error("가게 주소는 필수입니다.");
    }
    
    // region_id는 URL 파라미터로 받기 때문에 body에서 가져오지 않음
    const store = {
      name: body.name,
      address: body.address,
      score: body.score ? parseFloat(body.score) : null, // 평점은 선택 사항
      region_id: body.region_id // 외래 키로 사용되는 region_id
    };
  
    return store;
  };
  
