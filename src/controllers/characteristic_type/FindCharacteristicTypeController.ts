import {Request, Response} from 'express'
import { FindCharacteristicTypeService } from '../../services/characteristic_type/FindCharacteristicTypeService';

class FindCharacteristicTypeController{
  async handle(req: Request, res: Response){


    const detailCharracteristicService = new FindCharacteristicTypeService();

    const payment_method = await detailCharracteristicService.findAll();

    return res.json(payment_method);

  }
}

export { FindCharacteristicTypeController  }