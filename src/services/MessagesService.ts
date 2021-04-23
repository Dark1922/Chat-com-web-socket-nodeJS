import { getCustomRepository, Repository } from "typeorm";
import { MessagesRepository } from "../repositories/MessagesRepository";
import { Message } from "../entities/Message";

interface iMessageCreate{
    admin_id?: string;
    text: string;
    user_id: string;
}

class MessagesService{

    private messagesRepository: Repository<Message>;

    constructor(){
        this.messagesRepository = getCustomRepository(MessagesRepository);
    }
    
    async create({ admin_id, text, user_id}: iMessageCreate){
        
        const message = this.messagesRepository.create({
            admin_id,
            text,
            user_id
        });

        await this.messagesRepository.save(message);

        return message;
    }

    async listByUser(user_id: string){

        const list = await this.messagesRepository.find({ 
            user_id
        });

        return list;
    }
}

export { MessagesService }