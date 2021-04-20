import {Router} from 'express';
import { SettignsController } from './controllers/Settings.Controller';




const routes = Router();
const settignsController = new SettignsController();

routes.post("/settings",settignsController.create ) ;
//dados da nossas settings settignsController.create

export {routes};
