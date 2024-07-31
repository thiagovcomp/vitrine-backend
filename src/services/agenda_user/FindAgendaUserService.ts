import prismaClient from '../../prisma';


import { Prisma } from '@prisma/client'

class FindAgendaUserService{
  
  async getPerAgendaId(agenda_id :number) {
    
    const agenda_users = await prismaClient.$queryRaw(
      Prisma.sql`
      SELECT 
        a.id,
        a.user_id,
        U.name
      FROM
        agendas_users a
	    JOIN users u ON u.id = a.user_id
      WHERE
        a.agenda_id= ${agenda_id}
    `)

    return agenda_users;
  }
}

export { FindAgendaUserService }