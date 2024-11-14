// user_mission.service.js
import { insertUserMission, checkUserAndMissionExistence } from "../repositories/user_mission.repository.js";

export const addUserMission = async (pool, userId, missionId) => {
    // 사용자와 미션이 존재하는지 확인
    const exists = await checkUserAndMissionExistence(pool, userId, missionId);
    if (!exists) {
        throw new Error("Either the user or mission does not exist.");
    }

    // user_mission에 추가
    return await insertUserMission(pool, { userId, missionId });
};
