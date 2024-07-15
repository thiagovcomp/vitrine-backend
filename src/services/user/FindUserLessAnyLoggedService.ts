import prismaClient from '../../prisma';

class FindUserLessAnyLoggedService {
  async execute(user_uuid: string) {

    const user = await prismaClient.user.findMany({
      where:{
        NOT:{
          uuid: user_uuid
        }
      },
      select:{
        id: true,
        // uuid: true,
        name: true,
        // email: true,
        // phone: true,
        // valid: true,
        // active: true
      }
    })

    return user;
  }
}

export { FindUserLessAnyLoggedService }