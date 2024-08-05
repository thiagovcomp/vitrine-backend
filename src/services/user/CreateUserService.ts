import prismaClient from '../../prisma'
// import { hash } from 'bcryptjs'
import { CreateCompanyService } from '../company/CreateCompanyService'

interface UserRequest{
  name: string;
  email: string;
  password: string;
}

class CreateUserService{
  async execute({ name, email, password }: UserRequest){

    // // verificar se ele enviou um email
    if(!email){
      throw new Error("Email obrigatório")
    }
 
    // //Verificar se esse email já está cadastrado na plataforma
    const userAlreadyExists = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })

    // if(userAlreadyExists){
    //   throw new Error("Email já cadastrado.")
    // }

    // const createCompanyService = new CreateCompanyService();

    // const company = await createCompanyService.execute({
    //   name
    // });

    // const passwordHash = await hash(password, 8)

    // const user = await prismaClient.user.create({
    //   data:{
    //     company_id: company.id,
    //     name: name,
    //     email: email,
    //     password: passwordHash,
    //   },
    //   select:{
    //     uuid: true,
    //     name: true,       
    //     email: true,
    //   }
    // })


    // return user;
  }
}

export { CreateUserService }