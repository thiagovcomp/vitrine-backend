import prismaClient from '../../prisma';

class FindCharacteristicTypeService{
  async findAll(){

    const charesticType = await prismaClient.characteristicType.findMany({
      where:{
        deleted_at: null
      },
      select:{
        uuid: true,
        name: true
      }
    })

    return charesticType;
  }
}

export { FindCharacteristicTypeService }