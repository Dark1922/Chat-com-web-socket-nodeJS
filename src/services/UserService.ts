import { getCustomRepository, Repository } from "typeorm" //atributo do typeorm
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository"


class UsersService {
  private usersRepository: Repository<User>;
  constructor() {
    this. usersRepository = getCustomRepository(UserRepository)
  }
async create(email:string) {



const userExist = await this.usersRepository.findOne({
email
});

if(userExist) {
  return userExist;

}

const user = this.usersRepository.create({
  email,
});
await this.usersRepository.save(user);
return user;
}
}
export { UsersService }
