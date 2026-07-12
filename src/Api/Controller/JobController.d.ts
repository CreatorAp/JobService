import Mediator from "../../Application/Bus/Mediator";
import { Request, Response } from 'express';
export default class JoBController {
    private mediator;
    constructor(mediator: Mediator);
    CreateJob(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=JobController.d.ts.map