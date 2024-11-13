// mission.dto.js
export const validateMissionDTO = (data) => {
    const { storeId, reward, deadline, missionSpec } = data;

    if (!storeId) {
        return "storeId is required.";
    }
    if (typeof storeId !== "number") {
        return "storeId must be a number.";
    }
    if (!reward || typeof reward !== "number" || reward <= 0) {
        return "Reward must be a positive number.";
    }
    if (!deadline || isNaN(Date.parse(deadline))) {
        return "Deadline must be a valid date string.";
    }
    if (!missionSpec || typeof missionSpec !== "string") {
        return "Mission specification must be a valid string.";
    }

    return null; // 검증 성공
};