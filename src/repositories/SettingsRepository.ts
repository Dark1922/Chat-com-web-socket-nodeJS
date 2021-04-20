import { Repository, EntityRepository } from "typeorm";
import { Setting } from "../entities/Setting";

//<> fala o tipo que está se extendendo
@EntityRepository(Setting) //entidade de repositorio do tipo Setting
class SettingsRepository extends Repository<Setting>{

}

export {SettingsRepository}
