import express from "express";
import UrlController from "../controllers/urlController";
import { generateShortUrlLimiter } from "../midddlewares/rateLimiters";

const router = express.Router();

//for shorting the url
router.post("/", generateShortUrlLimiter, UrlController.generateShortUrl)
router.get("/topClickedLinks", UrlController.topClickedLinks)

export { router as urlRouter }

