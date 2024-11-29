import { isStoreExist, addMission } from "../services/mission.service.js";
import { validateMissionDTO } from "../dtos/mission.dto.js";

export const handleMissionUpload = async (req, res) => {
    const pool = req.app.get("pool");

    try {
        const { storeId, reward, deadline, missionSpec } = req.body || {};

        // 데이터 출력 디버깅
        console.log("Request Body:", req.body);

        const validationError = validateMissionDTO(req.body);
        if (validationError) {
            return res.status(400).json({ message: validationError });
        }

        const storeExists = await isStoreExist(pool, storeId);
        if (!storeExists) {
            return res.status(404).json({ message: "Store not found." });
        }

        await addMission(pool, storeId, reward, deadline, missionSpec);
        return res.status(201).json({ message: "Mission added successfully!" });
    } catch (err) {
        console.error("Error in handleMissionUpload:", err);
        return res.status(500).json({ message: "An error occurred while adding the mission." });
    }
};
