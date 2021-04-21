import { Request ,Response  } from 'express'
import { MessagesService } from '../services/MessagesService';

class MessagesController {
  async create( request: Request, response: Response, ) {
    const { admin_id , text, user_id } = request.body;
    const messagesService = new MessagesService();//import do messagesservice

    const message = await  messagesService.create({
      admin_id, //se o admin n vier preenchido vai continuar salvando ja q ele é opcional
      text,
      user_id,
    });

    return response.json(message);
  }
  //mostrar pro usuario  showByUser nome traduzido
  //localhost:3333/messages/idDoUser ai agente pega pelo params parametro
async showByUser( request: Request, response: Response, ) {
  const { id } = request.params; // vamos receber pelo params

  const messagesService = new MessagesService();

  const list  = await messagesService.ListByUser(id);//ListByUser criada lá no service

  return response.json(list);
}
}

export { MessagesController };
