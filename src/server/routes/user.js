import userCtrl from "../controller/user";
import express from "express";
const router = express.Router();

router.post("/", userCtrl.loginClient);
router.post("/register", userCtrl.createClient);
router.get("/users", userCtrl.getAllUsers);
module.exports = router;
