import userCtrl from "../controller/user";
import express from "express";
const router = express.Router();

router.get("/users", userCtrl.getAllUsers);
router.post("/", userCtrl.createClient);

module.exports = router;
