import { NextFunction, Request, Response } from "express";
import ExpressError from "../utils/expressError";

const errorMiddleware = (err: ExpressError, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(err.statusCode || 500).json({
    message: err.message || "Something went wrong in server",
  })
}

export default errorMiddleware;
