import {Request, Response} from 'express'
import { DeleteAgendaService } from '../../services/agenda/DeleteAgendaService'

class DeleteAgendaController {
  async handle(req: Request, res: Response){

    const user_id = req.user_id;
    const id = (+req.query.id)

    const deleteAgendaService = new DeleteAgendaService();

    const agenda = await deleteAgendaService.execute(user_id, id);

    return res.json(agenda);
  }
}

export { DeleteAgendaController}