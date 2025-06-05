import { NextFunction, Request, Response } from "express";

type FuncType = (req: Request, res: Response, next: NextFunction) => Promise<any>;

const asyncCatch = (func: FuncType) => {
  return  (req: Request, res: Response, next: NextFunction) => {
    func(req, res, next).catch(next);
  }

}

export default asyncCatch;
