import { Repository, EntityRepository } from "typeorm";
import { Connection } from "../entities/Connection";

//<> fala o tipo que está se extendendo
@EntityRepository(Connection) //entidade de repositorio do tipo Setting
class ConnectionRepository extends Repository<Connection>{

}


export {ConnectionRepository}
