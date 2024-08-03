import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors';
import cors from 'cors';
import path from 'path'

import { router } from './routes';
try{
    console.log('aq');
    const app = express();
    app.use(express.json());
    app.use(cors());
    
    // app.use(router);
    
    // app.use(
    //   '/files',
    //   express.static(path.resolve(__dirname, '..', 'tmp'))
    // )
    
    // app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    //   if(err instanceof Error){
    //     //Se for uma instancia do tipo error
    //     return res.status(400).json({
    //       error: err.message
    //     })
    //   }
    
    //   return res.status(500).json({
    //     status: 'error',
    //     message: 'Internal server error1.'
    //   })
    
    // })
    app.listen(process.env.PORT, () => console.log('HTTP Server Running'))
} catch (e) {
  const message = e instanceof Error ? e.message : "Unknown error. n definico"
  console.log(message)
}

