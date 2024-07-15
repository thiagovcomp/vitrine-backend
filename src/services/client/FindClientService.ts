import prismaClient from '../../prisma';
import { retornarSoNumero } from '../../util/util';
class FindClientService{
  async execute(user_id :number) {

    const clients = await prismaClient.client.findMany({
      where:{
        user_id: user_id,
        deleted_at: null
      },
      select:{
        id: true,
        uuid: true,
        name: true,
        email: true,
        phone: true
      }
    })

    return clients;
  }

  async findPhone(phone:string, user_id: number) {

    phone = retornarSoNumero(phone)

    const clients = await prismaClient.client.findMany({
      where:{
        user_id: user_id,
        phone: phone,
        deleted_at: null
      },
      select:{
        id: true,
        uuid: true,
        name: true,
        email: true,
        phone: true
      }
    })

    return clients;
  }
}

export { FindClientService }