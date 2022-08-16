import { Router } from "express";
import { get_image } from "../controller/imageController";


const router = Router();

router.get("/",get_image);

export default router;
