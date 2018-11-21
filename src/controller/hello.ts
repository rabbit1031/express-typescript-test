import { Response } from 'express';

export const index = (res: Response) => {
  res.send({ message: 'Hello, World!' });
};
