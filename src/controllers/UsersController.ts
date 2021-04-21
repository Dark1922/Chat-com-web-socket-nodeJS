import {Response , Request } from 'express'
import { UsersService } from '../services/UserService'


class UserController { //retorno response
async create( request: Request, response: Response): Promise<Response> {
  const { email } = request.body;
  const usersService = new UsersService();

  const user = await usersService.create(email);

  return response.json(user);
}

}
export {UserController}
