import { NextFunction, Request, Response } from "express";
import asyncCatch from "../utils/asyncCatch";
import { nanoid } from "nanoid";
import { HASHLENGTH, URLEXPIRATION } from "../utils/config";
import { Url } from "../models/url";
import dotenv from "dotenv"
import ExpressError from "../utils/expressError";
import checkValidUrl from "../utils/checkValidUrl";

dotenv.config()

const frontendUrl = process.env.FRONTEND_URL as string;
const backendUrl = process.env.BACKEND_URL as string;

class UrlController {
  static generateShortUrl = asyncCatch(
    async (req: Request, res: Response, next: NextFunction) => {
      const { url } = req.body;
      if(!checkValidUrl(url)) throw new ExpressError("Please provide a valid URL", 400);

      const hashId = nanoid(HASHLENGTH)
      const timeNow = Date.now()
      const shortenUrl = new Url({
        originalUrl: url,
        hashId,
        createdAt: new Date(timeNow),
        expiresAt: new Date(timeNow + URLEXPIRATION), })
      await shortenUrl.save()

      res.status(200).json({
        message: "URL shortened",
        data: {
          shortenUrl: `${backendUrl}/${shortenUrl.hashId}`
        }
      })
    }
  );

  static redirectShortUrl = asyncCatch(
    async (req: Request, res: Response, next: NextFunction) => {
      const hashId = req.params.hashId as string;
      if (hashId.trim().length < 6) res.redirect(`${frontendUrl}/error?msg=Invalid URL`); // Redirect to a frontend page indicating the URL is invalid
      const urlData = await Url.findOne({ hashId })
      if (!urlData) res.redirect(`${frontendUrl}/error?msg=URL not found`); // Redirect to a frontend page indicating the URL has expired
      else {

        if (new Date() > urlData.expiresAt) {
          // Optionally delete the expired URL from the database
          await Url.deleteOne({ hashId });

          // Redirect to a frontend page indicating the URL has expired
          res.redirect(`${frontendUrl}/error?msg=URL has been expired`);
          // throw new ExpressError("This short URL has expired", 410); //redirect to frontend error page
        }

        urlData.clickCount++;
        await urlData.save()

        // Redirect to the original URL
        res.redirect(urlData.originalUrl)
      }
    }
  );

  static topClickedLinks = asyncCatch(
    async (__: Request, res: Response, _: NextFunction) => {
      const topUrls = await Url.find({})
        .sort({ clickCount: -1 })
        .limit(10)
        .select("hashId clickCount");

        topUrls.forEach(url => {
          url.hashId = `${backendUrl}/${url.hashId}`;
        })

      res.status(200).json({
        message: "Top clicked URLs retrieved successfully",
        data: topUrls
      });
    }
  );

}
export default UrlController;
