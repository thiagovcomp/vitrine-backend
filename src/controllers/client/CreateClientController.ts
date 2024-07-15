import {Request, response, Response} from 'express'
import { CreateClientService } from '../../services/client/CreateClientService'

class CreateClientController{
  async handle(req: Request, res: Response){
    const { name, email, phone } = req.body;
    const user_id = req.user_id

    const createClientService = new CreateClientService();

    const client = await createClientService.execute({
      name,
      email,
      phone,
      user_id,
    });

    return res.json(client)
  }
}

export { CreateClientController }