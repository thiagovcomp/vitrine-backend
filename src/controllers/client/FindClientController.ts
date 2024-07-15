import {Request, Response} from 'express'
import { FindClientService } from '../../services/client/FindClientService'

class FindClientController {
  async handle(req: Request, res: Response){
    
    const user_id = req.user_id;

    const findClientService = new FindClientService();

    const user = await findClientService.execute(user_id);

    return res.json(user);

  }
  
  async findPhone(req: Request, res: Response){
    
    const phone = req.query.phone as string;
    const user_id = req.user_id;

    const findClientService = new FindClientService();

    const client = await findClientService.findPhone(phone, user_id);

    return res.json(client);
  }
}

export { FindClientController  }