import prismaClient from '../../prisma';

class FindCharacteristicTypeServiceByUUID{
  async execute(uuid :string){

    const charesticType = await prismaClient.characteristicType.findFirst({
      where:{
        uuid: uuid
      },
      select:{
        id: true,
        uuid: true,
        name: true
      }
    })

    return charesticType;
  }
}

export { FindCharacteristicTypeServiceByUUID }