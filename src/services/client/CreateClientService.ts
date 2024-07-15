import prismaClient from '../../prisma'

interface ClientRequest{
  name: string;
  phone: string;
  email: string;
  user_id: number;
}

class CreateClientService{
  async execute({ name, phone, email, user_id }: ClientRequest){

    // verificar se ele enviou um email
    if(!email){
      throw new Error("Email obrigatório")
    }

    if(!name){
        throw new Error("Nome é obrigatório")
    }

      
    if(!phone){
        throw new Error("Telefone obrigatório")
      }
 
    //Verificar se esse email já está cadastrado na plataforma
    const clientAlreadyExists = await prismaClient.client.findFirst({
      where:{
        email: email
      }
    })

    if(clientAlreadyExists){
      throw new Error("Email já cadastrado.")
    }
    console.log(user_id)
    //alterar
    const company_id = 1;
    
    const client = await prismaClient.client.create({
      data:{
        company_id: company_id,
        user_id: user_id,
        name: name,
        email: email,
        phone: phone,
      },
      select:{
        uuid: true,
        name: true,       
        email: true,
        phone: true
      }
    })

    return client;
  }
}

export { CreateClientService }