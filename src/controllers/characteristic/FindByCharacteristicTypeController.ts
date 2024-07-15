import {Request, Response} from 'express'
import { FindByCharacteristicTypeService } from '../../services/characteristic/FindByCharacteristicTypeService'
import { FindCharacteristicTypeServiceByUUID } from '../../services/characteristic_type/FindCharacteristicTypeServiceByUUID'

class FindByCharacteristicTypeController{
  async handle(req: Request, res: Response){

    const uuid = req.query.characteristic_type_id as string;

    const findCharacteristicTypeServiceByUUID = new FindCharacteristicTypeServiceByUUID();
    const detailCharacteristicService = new FindByCharacteristicTypeService();

    const charesticType = await findCharacteristicTypeServiceByUUID.execute(uuid);

    // let characteristic = [{uuid: 0, name: 'Tipo Tranca'}]
    let characteristic = await detailCharacteristicService.execute(charesticType.id)
    
    if (charesticType.id == 1) {
      characteristic.unshift({id: 0, name: 'Tipo da Trança'})
    }

    if (charesticType.id == 2) {
      characteristic.unshift({id: 0, name: 'Tamanho da Trança (cumprimento) *'})
    }

    if (charesticType.id == 3) {
      characteristic.unshift({id: 0, name: 'Espessura Trança'})
    }

    if (charesticType.id == 4) {
      characteristic.unshift({id: 0, name: 'Tipo do cabelo para a Trança'})
    }
    return res.json(characteristic);
  }
}

export { FindByCharacteristicTypeController }