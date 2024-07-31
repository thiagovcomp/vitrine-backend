import prismaClient from '../../prisma';

import { Prisma } from '@prisma/client'

class FindAgendaService{
  async getPerStart(user_id :number, dateInitial: string, dateFinal: string){
    
    const agendas = await prismaClient.$queryRaw(
      Prisma.sql`
        SELECT 
          a.id AS id,
          a.amount AS amount,
           FORMAT(a.amount, 2, 'pt_BR') AS amount_format,
          a.amount_signal AS amount_signal,
          a.fine_delay_amount AS fine_delay_amount,
          a.fine_delay_observation AS fine_delay_observation,
          a.observation AS observation,
          a.start AS start,
          a.end AS end,
          DATE_FORMAT(start, '%d/%m/%Y') AS start_date_format,
          DATE_FORMAT(start, '%H:%i:%s') AS start_time_format,
          DATE_FORMAT(end, '%H:%i:%s') AS end_time_format,
          DATE_FORMAT(duration, '%H:%i:%s') AS duration_time_format,
          a.duration AS duration,
          a.customer_brings_hair AS customer_brings_hair,
          c.id AS client_id,
          c.name AS client_name,
          c.email AS client_email,
          c.phone AS client_phone,
          pm.id AS payment_methods_id,
          pm.name AS payment_methods_name,
          cbs.id AS characteristic_braid_size_id,
          cbs.name AS characteristic_braid_size_name,
          cbt.id AS characteristic_braid_thickness_id,
          cbt.name AS characteristic_braid_thickness_name,
          cbty.id AS characteristic_braid_type_id,
          cbty.name AS characteristic_braid_type_name,
          cbm.id AS characteristics_braid_material_id,
          cbm.name AS characteristics_braid_material_name, 
          (SELECT GROUP_CONCAT(Name)
          FROM 
            agendas_users au
          JOIN users u ON u.id = au.user_id
          WHERE
            au.agenda_id = a.id
            ) AS agendas_users
      FROM
          agendas a
          JOIN clients c ON c.id = a.client_id
          JOIN payment_methods pm ON pm.id = a.payment_method_id
          JOIN characteristic cbs ON cbs.id = a.characteristic_id_braid_size
          JOIN characteristic cbt ON cbt.id = a.characteristic_id_braid_thickness
          JOIN characteristic cbty ON cbty.id = a.characteristic_id_braid_type
          JOIN characteristic cbm ON cbm.id = a.characteristics_id_braid_material
        WHERE
          a.user_id_owner = ${user_id}
      AND a.start <=  ${dateFinal} AND a.start >=  ${dateInitial}
      AND a.deleted_at IS NULL
    `)
    return agendas;
  }

  async getPerId(id :number) {
    
    const agendas = await prismaClient.$queryRaw(
      Prisma.sql`
       SELECT 
          a.id AS id,
          a.amount AS amount,
          FORMAT(a.amount, 2, 'pt_BR') AS amount_format,
          a.amount_signal AS amount_signal,
          FORMAT(a.amount_signal, 2, 'pt_BR') AS amount_signal_format,
          a.fine_delay_amount AS fine_delay_amount,
          FORMAT(a.fine_delay_amount, 2, 'pt_BR') AS fine_delay_amount_format,
          
          a.fine_delay_observation AS fine_delay_observation,
          a.observation AS observation,
          a.start AS start,
          a.end AS end,
          DATE_FORMAT(start, '%d/%m/%Y') AS start_date_format,
          DATE_FORMAT(start, '%H:%i:%s') AS start_time_format,
          DATE_FORMAT(end, '%H:%i:%s') AS end_time_format,
          DATE_FORMAT(duration, '%H:%i:%s') AS duration_time_format,
          a.duration AS duration,
          a.customer_brings_hair AS customer_brings_hair,
          c.id AS client_id,
          c.name AS client_name,
          c.email AS client_email,
          c.phone AS client_phone,
          pm.id AS payment_methods_id,
          pm.name AS payment_methods_name,
          cbs.id AS characteristic_braid_size_id,
          cbs.name AS characteristic_braid_size_name,
          cbt.id AS characteristic_braid_thickness_id,
          cbt.name AS characteristic_braid_thickness_name,
          cbty.id AS characteristic_braid_type_id,
          cbty.name AS characteristic_braid_type_name,
          cbm.id AS characteristics_braid_material_id,
          cbm.name AS characteristics_braid_material_name, 
          (SELECT GROUP_CONCAT(Name)
          FROM 
            agendas_users au
          JOIN users u ON u.id = au.user_id
          WHERE
            au.agenda_id = a.id
            ) AS agendas_users,
          u.name AS user_name_owner,
          u.phone AS user_phone_owner
      FROM
          agendas a
          JOIN users u ON u.id = a.user_id_owner
          JOIN clients c ON c.id = a.client_id
          JOIN payment_methods pm ON pm.id = a.payment_method_id
          JOIN characteristic cbs ON cbs.id = a.characteristic_id_braid_size
          JOIN characteristic cbt ON cbt.id = a.characteristic_id_braid_thickness
          JOIN characteristic cbty ON cbty.id = a.characteristic_id_braid_type
          JOIN characteristic cbm ON cbm.id = a.characteristics_id_braid_material
        WHERE
          a.id = ${id}
    `)

    if (agendas[0].fine_delay_amount != undefined && agendas[0].fine_delay_amount != null) {
      agendas[0].fine = true;
    } else {
      agendas[0].fine = false;
    }
    return agendas[0] ?? [];
  }
}

export { FindAgendaService }