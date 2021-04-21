import {Column, MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1619014628171 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.createTable(
        new Table({
         name: "users",//nome da tabela
         columns: [//colunas da tabela
          {
            name: "id",
            type: "uuid",
            isPrimary: true, //chave primaria
          },
          {
            name:"email",//nome da coluna da tabela e seus dado abaixo
            type:"varchar",
          },
          {
          name: "created_at",
          type: "timestamp",
          default:"now()",
          }
         ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("users");//o nome da tabela pra desfazer
      //caso algo deia errado
    }

}
