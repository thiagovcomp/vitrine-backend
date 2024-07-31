import {Request, Response} from 'express'
import { FindAgendaUserService } from '../../services/agenda_user/FindAgendaUserService'
import {retornarDataSemUtc} from '../../util/util'

import moment from 'moment';

class FindAgendaUserController {
 
  async getPerAgenda(req: Request, res: Response){

    const user_id = req.user_id;
    const agenda_id = (+req.query.agenda_id);

    const findAgendaUserService = new FindAgendaUserService();

    const agenda = await findAgendaUserService.getPerAgendaId(agenda_id);

    return res.json(agenda);
  }
}

export { FindAgendaUserController}