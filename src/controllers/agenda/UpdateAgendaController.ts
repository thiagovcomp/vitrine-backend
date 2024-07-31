import {Request, response, Response} from 'express'
import { UpdateAgendaService } from '../../services/agenda/UpdateAgendaService'
import {CreateAgendaUserService} from '../../services/agenda_user/CreateAgendaUserService'

import {formatarValorParaBanco} from '../../util/util'

function FormataStringData(data) {
  var dia  = data.split("/")[0];
  var mes  = data.split("/")[1];
  var ano  = data.split("/")[2];

  return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
  // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}
class UpdateAgendaController{

  async handle(req: Request, res: Response){
    // var moment = require('moment');
    let {payment_method_id, 
        characteristic_id_braid_size, characteristic_id_braid_thickness, characteristic_id_braid_type, 
        characteristics_id_braid_material, amount, amount_signal,
        fine_delay_amount,duration,fine_delay_observation, observation, user_braid_responsible, hour, customer_brings_hair } = req.body;
    let {start} =  req.body
    const id = (+req.query.id);
    
    amount = formatarValorParaBanco(amount)
    amount_signal = formatarValorParaBanco(amount_signal)
    fine_delay_amount = formatarValorParaBanco(fine_delay_amount)
    console.log(amount)
   

//throw new Error(amount);
    const user_id = req.user_id
    const updateAgendaService = new UpdateAgendaService();
    
    start = FormataStringData(start)
    
    start = start + 'T' + hour+'.000Z'
    const end = start
   
    const client_id = 1;
    const company_id = 1
    const user_id_owner = user_id
    
    fine_delay_amount

    // const end = start
    const agenda = await updateAgendaService.execute({
        id,
        client_id, company_id, user_id_owner, payment_method_id, 
        characteristic_id_braid_size, characteristic_id_braid_thickness, characteristic_id_braid_type, 
        characteristics_id_braid_material, start,duration, amount, amount_signal,
        fine_delay_amount,fine_delay_observation, observation, end, user_braid_responsible, customer_brings_hair
    });
    console.log(customer_brings_hair)
    console.log(user_braid_responsible)
    const createAgendaUserService = new CreateAgendaUserService();
    
    // let user_responsible = 0

    // if (user_braid_responsible[0] == undefined) {
    //   user_responsible = user_braid_responsible.id
    // } else {
    //   user_responsible = user_braid_responsible[0].id
    // }
    // const agendaUser = await createAgendaUserService.execute({
    //   agenda_id: agenda.id, 
    //   user_id: user_responsible
    // })

    return res.json(agenda)
  }
}

export { UpdateAgendaController }