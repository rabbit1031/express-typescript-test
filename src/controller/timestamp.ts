import { Request, Response } from 'express';

export const index = (req: Request, res: Response) => {
  const date = new Date();
  const response = {
    Timestamp: date.valueOf(),
    DateTime: date.toJSON(),
  };

  res.send(response);
};
