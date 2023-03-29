import express from "express";
import { verifyToken } from "../middleware/jwt.js";

import {
  createGig,
  deleteGig,
  getGig,
  getGigs,
} from "../controllers/gig.controller.js";

const router = express.Router();

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/", verifyToken, getGigs);
router.get("/single/:id", verifyToken, getGig);

export default router;