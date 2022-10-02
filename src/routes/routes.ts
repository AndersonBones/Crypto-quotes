import { Router } from "express";
import Controllers from '../controllers/Controllers'
const router = Router();

router.get("/", Controllers.home)

router.get('/search', Controllers.search)

export default router