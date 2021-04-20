import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn
   } from 'typeorm';
   import { v4 as uuid } from 'uuid'

@Entity("settings")//entidade nome da tabela


//campos da tabela mapeados dom decorators js/ts
class Setting {
@PrimaryColumn() //primary key
id: string; //typescript nos damos 2 ponto e difinimos tipo do atributo

@Column()
username:string; //coluna

@Column()
chat: boolean; //coluna

@UpdateDateColumn() //update coluna data
updated_at: Date;

@CreateDateColumn() //created coluna data
created_at: Date;

constructor() {
if(!this.id){
this.id = uuid();
}
}
}
export {Setting}
