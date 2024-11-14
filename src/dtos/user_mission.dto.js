// user_mission.dto.js
export const validateUserMissionDTO = (data) => {
    const { userId, missionId } = data;

    if (!userId || typeof userId !== "number") {
        return "Invalid userId. It must be a number.";
    }

    if (!missionId || typeof missionId !== "number") {
        return "Invalid missionId. It must be a number.";
    }

    return null; // 검증 성공
};
