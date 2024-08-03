import { Router } from 'express';
import multer from 'multer';


import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController'
import { FindUserLessAnyLoggedController } from './controllers/user/FindUserLessAnyLoggedController'

import { FindPaymentMethodController } from './controllers/payment_method/FindPaymentMethodController';

import { FindCharacteristicTypeController } from './controllers/characteristic_type/FindCharacteristicTypeController';
import { FindByCharacteristicTypeController } from './controllers/characteristic/FindByCharacteristicTypeController';

import { CreateClientController } from './controllers/client/CreateClientController';
import { FindClientController } from './controllers/client/FindClientController';

import { CreateAgendaController } from './controllers/agenda/CreateAgendaController';
import { UpdateAgendaController } from './controllers/agenda/UpdateAgendaController';
import { FindAgendaController } from './controllers/agenda/FindAgendaController';
import { DeleteAgendaController } from './controllers/agenda/DeleteAgendaController';

import { FindAgendaUserController } from './controllers/agenda_user/FindAgendaUserController';


import { isAuthenticated } from './middlewares/isAuthenticated'

import uploadConfig from './config/multer'

const router = Router();

// const upload = multer(uploadConfig.upload("./tmp"));

//-- ROTAS USER --
// router.post('/users', new CreateUserController().handle)

// router.post('/session', new AuthUserController().handle)

// router.get('/me', isAuthenticated,  new DetailUserController().handle )
// router.get('/users/lessAnyLogged', isAuthenticated,  new FindUserLessAnyLoggedController().handle )


// // Method payments

// router.get('/paymenth_methods', isAuthenticated,  new FindPaymentMethodController().handle )

// // characteristic types

// router.get('/characteristic_types', isAuthenticated,  new FindCharacteristicTypeController().handle )

// // characteristic types
// router.get('/characteristic/characteristic_types/', isAuthenticated,  new FindByCharacteristicTypeController().handle )

// // client

// router.post('/clients', isAuthenticated,  new CreateClientController().handle )
// router.get('/clients', isAuthenticated,  new FindClientController().handle )
// router.get('/clients/phone', isAuthenticated,  new FindClientController().findPhone )

// // client

// router.post('/agendas', isAuthenticated,  new CreateAgendaController().handle )
// router.put('/agendas', isAuthenticated,  new UpdateAgendaController().handle )
// router.get('/agendas', isAuthenticated,  new FindAgendaController().getPerStart )
// router.get('/agendas/id', isAuthenticated,  new FindAgendaController().getPerId )
// router.delete('/agendas', isAuthenticated,  new DeleteAgendaController().handle )

// router.get('/agenda_users', isAuthenticated,  new FindAgendaUserController().getPerAgenda)
// //-- ROTAS CATEGORY
// router.post('/category', isAuthenticated, new CreateCategoryController().handle )

// router.get('/category', isAuthenticated, new ListCategoryController().handle )

// //-- ROTAS PRODUCT
// router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle )

// router.get('/category/product', isAuthenticated, new ListByCategoryController().handle )

// //-- ROTAS ORDER
// router.post('/order', isAuthenticated, new CreateOrderController().handle )
// router.delete('/order', isAuthenticated, new RemoveOrderController().handle )

// router.post('/order/add', isAuthenticated, new AddItemController().handle )
// router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle )

// router.put('/order/send', isAuthenticated, new SendOrderController().handle )

// router.get('/orders', isAuthenticated, new ListOrdersController().handle )
// router.get('/order/detail', isAuthenticated, new DetailOrderController().handle )

// router.put('/order/finish', isAuthenticated, new FinishOrderController().handle )

export { router }; 