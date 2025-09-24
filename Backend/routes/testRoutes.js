import express from "express";
import {
  testUserController,
  testUserController2,
} from "../controllers/testController.js";


// router Object
const router = express.Router();

// routes GET | POST | UPDATE | DELETE
router.get("/test-user", testUserController);

// export
export default router;
