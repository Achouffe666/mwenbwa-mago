import userCtrl from "../controller/user";
import express from "express";
const router = express.Router();

router.post("/", userCtrl.loginClient);
//router.post("/", userCtrl.createClient);
router.get("/users", userCtrl.getAllUsers);

module.exports = router;
