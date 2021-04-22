import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createConnections1619101206773 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.createTable(
       new Table({
         name:"connections",
         columns: [
           {
            name:"id",
            type:"uuid",
            isPrimary: true,
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
            name:"socket_id",
            type:"varchar",

           },
           {
            name:"created_at",
            type:"timestamp", //qnd a mensagem foi salva
            default:"now()",
           },
           {
            name: "updated_at",
            type:"timestamp",
            default:"now()",
          },
         ],

       }),
     );
    //criar uma coluna forenekey que faça parte só de 1 tabela podemos fazer assim
     await queryRunner.createForeignKey(
       "connections", //qual que é a tabela da conecxões
       new TableForeignKey({//usando o table foreignkey
        name:"FKConnectionUser",
        referencedTableName: "users",
        referencedColumnNames:["id"],
        columnNames: ["user_id"],
        onDelete:"SET NULL",
        onUpdate: "SET NULL",
       })
     )
    }
     //ai temos que por em 1 o nome da conexão e a tabela que quer remover
     //da foreignkey tamos fazendo isso pq criamos ela de uma forma diferente
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey("connections", "FKConnectionUser");
       await queryRunner.dropTable("connections");
    }

}
