import { Decimal } from '@prisma/client/runtime/library'
import prismaClient, {} from '../../prisma'
import { Prisma, customerBringsHairType } from '@prisma/client'
// import { roleEnum } from '@prisma/client' 
interface userBraidResponsible{
  id: number;
  name: string;
}


interface AgendaRequest{
    id: number;
    client_id: number;
    company_id:  number;
    user_id_owner:  number;
    payment_method_id: number;
    characteristic_id_braid_size:  number;
    characteristic_id_braid_thickness:  number;
    characteristic_id_braid_type:  number;
    characteristics_id_braid_material: number;
    start: string;
    end: string;
    duration:  string;
    amount: Decimal;
    amount_signal: Decimal;
    fine_delay_amount: Decimal;
    fine_delay_observation: string;
    observation: string;
    user_braid_responsible: userBraidResponsible
    customer_brings_hair: customerBringsHairType
}

class UpdateAgendaService{
  async execute({ 
    id,
    client_id, company_id, user_id_owner, payment_method_id, 
    characteristic_id_braid_size, characteristic_id_braid_thickness, characteristic_id_braid_type, 
    characteristics_id_braid_material, start,duration, amount, amount_signal,
    fine_delay_amount,fine_delay_observation, observation, end, user_braid_responsible, customer_brings_hair
}: AgendaRequest){
    try {
    console.log(customer_brings_hair)
      const agenda = await prismaClient.agenda.update({
        where:{
            id: id
        },
        data:{
          client_id: client_id,
          company_id: company_id,
          user_id_owner: user_id_owner,
          payment_method_id: payment_method_id,
          characteristic_id_braid_size: characteristic_id_braid_size,
          characteristic_id_braid_thickness: characteristic_id_braid_thickness,
          characteristic_id_braid_type: characteristic_id_braid_type,
          characteristics_id_braid_material: characteristics_id_braid_material,
          start: start,
          end: end,
          duration: duration,
          amount: amount,
          amount_signal: amount_signal,
          fine_delay_amount: fine_delay_amount,
          fine_delay_observation: fine_delay_observation,
          observation: observation,
          customer_brings_hair: customer_brings_hair
        },
        select:{
          id: true,
          uuid: true       
        }
      })

      return agenda;
    } catch (e) {
      console.log(
       e
      )
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

export { UpdateAgendaService }