import {Request, Response} from 'express'
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/SettingsRepository';

//ele vai pegar todo código que tem dentro do routes.ts e por aqui
class SettignsController {
async create(request: Request, response:Response) {
  const {chat, username} = request.body;
  const settingsRepository = getCustomRepository(SettingsRepository);

  const settings = settingsRepository.create({
   chat,
   username,
   })
 await settingsRepository.save(settings);

 return response.json(settings);
}
}
export {SettignsController}
