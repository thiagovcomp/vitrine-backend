import {Request, Response} from 'express'
import { DetailUserService } from '../../services/user/DetailUserService'

class DetailUserController{
  async handle(req: Request, res: Response){

    const user_uuid = req.user_uuid;

    const detailUserService = new DetailUserService();

    const user = await detailUserService.execute(user_uuid);

    return res.json(user);

  }
}

export { DetailUserController  }