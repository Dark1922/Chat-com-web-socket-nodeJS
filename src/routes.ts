import {Router} from 'express';
import { MessagesController } from './controllers/MessagesController';
import { SettignsController } from './controllers/SettingsController';
import { UserController } from './controllers/UsersController';


const routes = Router();
const settignsController = new SettignsController();
const usersController = new UserController();
const messagesController = new MessagesController();

routes.post("/settings",settignsController.create);
routes.get("/settings/:username",settignsController.findByUsername);
routes.put("/settings/:username",settignsController.update);
//método de atualizar
routes.post("/users", usersController.create);
routes.post("/messages",  messagesController.create);
routes.get("/messages/:id",  messagesController.showByUser);


export {routes};
