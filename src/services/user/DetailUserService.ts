import prismaClient from '../../prisma';

class DetailUserService{
  async execute(user_uuid: string){

    const user = await prismaClient.user.findFirst({
      where:{
        uuid: user_uuid
      },
      select:{
        uuid: true,
        name: true,
        email: true,
        phone: true,
        valid: true,
        active: true
      }
    })

    return user;
  }

  async findId(user_id: string){

    const user = await prismaClient.user.findFirst({
      where:{
        uuid: user_id
      },
      select:{
        id: true
      }
    })

    return user;
  }
}

export { DetailUserService }