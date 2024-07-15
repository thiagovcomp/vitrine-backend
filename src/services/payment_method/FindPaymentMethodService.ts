import prismaClient from '../../prisma';

class FindPaymentMethodService{
  async findAll(){

    const paymentMethod = await prismaClient.paymentMethod.findMany({
      where:{
        deleted_at: null
      },
      select:{
        id: true,
        name: true
      }
    })

    return paymentMethod;
  }
}

export { FindPaymentMethodService }