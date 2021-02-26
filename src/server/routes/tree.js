import treeCtrl from "../controller/tree";
import express from "express";
const router = express.Router();

router.get("/testTree", treeCtrl.getAllTrees);
module.exports = router;
