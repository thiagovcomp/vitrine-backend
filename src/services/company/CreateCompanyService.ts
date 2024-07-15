import prismaClient from '../../prisma'

interface CompanyRequest {
    name: string;
}

class CreateCompanyService{

  async execute({ name }: CompanyRequest){

    // verificar se ele enviou um email
    if(!name){
      throw new Error("Name company incorrect")
    }
 
    const company = await prismaClient.company.create({
      data:{
        name: name
      },
      select:{
        id: true,
        name: true
      }
    })
    return company;
  }
}

export { CreateCompanyService }