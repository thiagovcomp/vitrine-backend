import prismaClient from '../../prisma'

interface AgendaUserRequest{
  agenda_id: number;
  user_id: number;
}

class CreateAgendaUserService{
  async execute({ agenda_id, user_id }: AgendaUserRequest){

    const agendaOnUser = await prismaClient.agendaOnUser.create({
      data:{
        agenda_id: agenda_id,
        user_id: user_id
      },
      select:{
        id: true
      }
    })

    return agendaOnUser;
  }
}

export { CreateAgendaUserService }