import {Request, Response} from 'express'
import { FindUserLessAnyLoggedService } from '../../services/user/FindUserLessAnyLoggedService'

class FindUserLessAnyLoggedController{
  async handle(req: Request, res: Response){

    const user_uuid = req.user_uuid;

    const findUserLessAnyLoggedService = new FindUserLessAnyLoggedService();

    let user = await findUserLessAnyLoggedService.execute(user_uuid);
    
    user.unshift({
      id: 0,
      name: 'Trancista responsável',
    })
    
    return res.json(user);
  }
}

export { FindUserLessAnyLoggedController  }