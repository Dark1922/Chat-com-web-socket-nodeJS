import {Entity, PrimaryColumn, Column, CreateDateColumn} from "typeorm"
import { v4 as uuid } from 'uuid'

@Entity("users")//entidade do banco de dados
class User {
  @PrimaryColumn()//primeira da coluna
  id:string;

  @Column()
  email:string;

  @CreateDateColumn()
  created_at: Date;

  constructor() { //responsabilidade de criar id pra nossa entidade
    if(!this.id){
    this.id = uuid();
    }
    }
}

export {User}
