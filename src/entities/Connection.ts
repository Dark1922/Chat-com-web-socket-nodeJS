import {
    Entity,
    PrimaryColumn ,
    CreateDateColumn,
    Column,
    ManyToOne,
    JoinColumn,
    UpdateDateColumn
    } from 'typeorm'

import { v4 as uuid } from 'uuid'
import { User } from './User';

@Entity("connections")
class Connection {
  @PrimaryColumn()//primeira da coluna
  id:string;

  @Column()
  admin_id: string;

  @Column()
  socket_id: string;

  @JoinColumn({name:"user_id"})
  @ManyToOne(()=> User)
  user: User

  @Column()
  user_id:string;

  @CreateDateColumn()
  created_at:Date;

  @UpdateDateColumn()
  updated_at:Date;

  constructor() { //responsabilidade de criar id pra nossa entidade
    if(!this.id){
    this.id = uuid();
    }
    }
}
export {Connection}
