import {Request, Response} from 'express';

export default class helloController {
    index(req: Request, res: Response): void {
        res.send('Hello');
    };
}