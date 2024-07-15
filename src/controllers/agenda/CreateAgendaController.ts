import {Request, response, Response} from 'express'
import { CreateAgendaService } from '../../services/agenda/CreateAgendaService'
import {CreateAgendaUserService} from '../../services/agenda_user/CreateAgendaUserService'

class CreateAgendaController{
  async handle(req: Request, res: Response){
    // var moment = require('moment');
    const {payment_method_id, 
        characteristic_id_braid_size, characteristic_id_braid_thickness, characteristic_id_braid_type, 
        characteristics_id_braid_material, amount, amount_signal,
        fine_delay_amount,duration,fine_delay_observation, observation, user_braid_responsible } = req.body;
    let {start} =  req.body
    // var moments = require("moment");
    
    const user_id = req.user_id
    const createAgendaService = new CreateAgendaService();
    const startUtc = new Date(start);
    
    start = startUtc 
    const end = start

    const client_id = 1;
    const company_id = 1
    const user_id_owner = user_id
    
    // const end = start
    const agenda = await createAgendaService.execute({
        client_id, company_id, user_id_owner, payment_method_id, 
        characteristic_id_braid_size, characteristic_id_braid_thickness, characteristic_id_braid_type, 
        characteristics_id_braid_material, start,duration, amount, amount_signal,
        fine_delay_amount,fine_delay_observation, observation, end, user_braid_responsible
    });
    
    const createAgendaUserService = new CreateAgendaUserService();
    
    const agendaUser = await createAgendaUserService.execute({
      agenda_id: agenda.id, 
      user_id: user_braid_responsible[0].Id
    })

    return res.json(agenda)
  }
}

export { CreateAgendaController }