import {NextFunction, Request, Response} from 'express'
import { verify } from 'jsonwebtoken'

import { DetailUserService } from '../services/user/DetailUserService';

interface Payload{
  sub: string;
}

export async function  isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
){

  // Receber o token
  const authToken = req.headers.authorization;

  if(!authToken){
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ")

  
  try{
    //Validar esse token.
    const { sub } = verify(
      token,
      process.env.JWT_SECRET
    ) as Payload;

    //Recuperar o id do token e colocar dentro de uma variavel user_id dentro do req.

    const detailUserService = new DetailUserService();

    const user =  await detailUserService.findId(sub);

    req.user_id = user.id;
    req.user_uuid = sub;
    
    return next();

  }catch(err){
    return res.status(401).end();
  }
}