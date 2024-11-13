// mission.service.js
import {insertMission, findStoreById} from "../repositories/mission.repository.js"

export async function addMission(pool, storeId, reward, deadline, missionSpec) {
    return await insertMission(pool, { storeId, reward, deadline, missionSpec });
}

export async function isStoreExist(pool, storeId) {
    return await findStoreById(pool, storeId);
}
