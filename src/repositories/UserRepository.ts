import {EntityRepository, Repository} from "typeorm";
import { User } from '../entities/User';

//ta se extendendo no repositorio do typeorm de User massa
@EntityRepository(User)//vai ser uma entidade de repositorio usuario do typeorm
class UserRepository extends Repository<User> {

}
export {UserRepository}
