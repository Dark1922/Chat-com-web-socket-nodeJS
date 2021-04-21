import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessages1619022657852 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await  queryRunner.createTable(
        new Table({
          name:"messages",//nomeda da tabela
          columns: [ //colunas da tabela
          {//elas é feita dentro de um bloco js
           name:"id",
           type:"uuid",
           isPrimary: true, //chave primaria
          },
          {
            name:"admin_id",
            type:"uuid",
            isNullable: true,
          },
          {
            name:"user_id",
            type:"uuid",
          },
          {
            name:"text",//mensagem em si
            type:"varchar",
          },
          {
            name:"created_at",
            type:"timestamp", //qnd a mensagem foi salva
            default:"now()",
          },
          ],
            foreignKeys: [
            {
              name:"FKUser",
              referencedTableName: "users",
              referencedColumnNames:["id"],
              columnNames: ["user_id"],
              onDelete:"SET NULL",
              onUpdate: "SET NULL",
            }
          ]
     })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await  queryRunner.dropTable("messages");
    }

}
