import {validateUserMissionDTO} from "../dtos/user_mission.dto.js";
import { addUserMission } from "../services/user_mission.service.js";

export const handleUserMissionUpload = async (req, res) => {
    const pool = req.app.get("pool"); // pool 객체를 가져옴

    try {
        const { userId, missionId } = req.body;

        // DTO 검증
        const validationError = validateUserMissionDTO(req.body);
        if (validationError) {
            return res.status(400).json({ message: validationError });
        }

        // 서비스 호출
        const userMissionId = await addUserMission(pool, userId, missionId);

        return res.status(201).json({
            message: "User mission added successfully!",
            userMissionId,
        });
    } catch (error) {
        console.error("Error in handleUserMissionUpload:", error);
        return res.status(500).json({ message: "Failed to add user mission." });
    }
};
