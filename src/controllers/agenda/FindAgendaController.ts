import {Request, Response} from 'express'
import { FindAgendaService } from '../../services/agenda/FindAgendaService'
import {retornarDataSemUtc} from '../../util/util'

import moment from 'moment';

class FindAgendaController {
  async getPerStart(req: Request, res: Response){

    const user_id = req.user_id;
    const date = req.query.date;

    let dateInitialMoment = moment(retornarDataSemUtc(date + ' 00:00:00')); 
    const dateInitial = dateInitialMoment.format()

    let dateFinalMoment = moment(retornarDataSemUtc(date + ' 23:59:59')); 
    const dateFinal = dateFinalMoment.format()
    
    const findAgendaService = new FindAgendaService();

    const agenda = await findAgendaService.getPerStart(user_id, dateInitial, dateFinal);

    return res.json(agenda);
  }
  
  async getPerId(req: Request, res: Response){

    const user_id = req.user_id;
    const id = (+req.query.id);

    const findAgendaService = new FindAgendaService();

    const agenda = await findAgendaService.getPerId(id);

    return res.json(agenda);
  }
}

export { FindAgendaController}