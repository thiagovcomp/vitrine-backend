import prismaClient from '../../prisma';

class FindByCharacteristicTypeService{
  async execute(characteristic_type_id: number){

    const charestic = await prismaClient.characteristic.findMany({
      where:{
        characteristic_type_id: characteristic_type_id,
        deleted_at: null
      },
      select:{
        id: true,
        name: true
      }
    })

    return charestic;
  }
}

export { FindByCharacteristicTypeService }