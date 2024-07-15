import { now } from 'moment';
import prismaClient from '../../prisma'
import { Prisma } from '@prisma/client'


class DeleteAgendaService{
  async execute(user_id: number, id: number){
// console.log(startFormat)
    // const start = startFormat
    try {
    // const agenda = await prismaClient.agenda.update({
    //   where:{
    //     id: id,
    //   },
    //   data: {
    //    // deleted_at: new Date().toISOString(),
    //     user_id_updated: user_id
    //   },
    // })
      const agenda = await prismaClient.$queryRaw(Prisma.sql`UPDATE agendas SET deleted_at = now() WHERE Id = ${id}`)
      return agenda;
    } catch (e) {
      console.log(e)
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2002') {
          console.log(
            'There is a unique constraint violation, a new user cannot be created with this email'
          )
        }
      }
      throw e
    }
    
  }
}

export { DeleteAgendaService }