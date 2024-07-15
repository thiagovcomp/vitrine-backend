import {Request, Response} from 'express'
import { FindPaymentMethodService } from '../../services/payment_method/FindPaymentMethodService'

class FindPaymentMethodController{
  async handle(req: Request, res: Response){


    const detailPaymentMethodService = new FindPaymentMethodService();

    const payment_method = await detailPaymentMethodService.findAll();

    return res.json(payment_method);

  }
}

export { FindPaymentMethodController  }