import {Router} from 'express';
import { MessagesController } from './controllers/MessagesController';
import { SettignsController } from './controllers/SettingsController';
import { UserController } from './controllers/UsersController';


const routes = Router();
const settignsController = new SettignsController();
const usersController = new UserController();
const messagesController = new MessagesController();

routes.post("/settings",settignsController.create );
routes.post("/users", usersController.create);
routes.post("/messages",  messagesController.create);
routes.get("/messages/:id",  messagesController.showByUser);
//método do controller showByUser junto do service e o id massa
//recebe o parametro :id
//dados da nossas settings settignsController.create

export {routes};
