import { Repository, EntityRepository } from "typeorm";
import { Message } from "../entities/Message";

//<> fala o tipo que está se extendendo
@EntityRepository(Message) //entidade de repositorio do tipo Setting
class MessagesRepository extends Repository<Message>{

}


export {MessagesRepository}
