import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createSettings1618927743310 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name:"settings",//nome da tabela
            columns:[//nossa colunas da tabela em array
            {//estrutura dela em um bloco em chave cada categoria do banco de dados
            name:"id",
            type:"uuid", //id aleatoria dificilmente vai ser repetido
            isPrimary: true //chave primaria
            },
            {
            name:"username",
            type:"varchar",
            },
            {
              name:"chat",
              type:"boolean",
              default:true, //se eu quero que toda vez um dado seja encerido numa tabela como valor default eu posso passar aqui
            },
            {
              name: "updated_at",//qnd tive um dado do nosso settings sendo alterado ele vai altera pra gente automaticamente sem agente precisar fazer nenhuma configuração e ele vai alterar com o horario que tenha acontecido essa alteração
              type:"timestamp",//representação de data
              default:"now()",
            },
            {
              name:"created_at", //msm coisa que o de cima atualiza data tb
              type:"timestamp",
              default:"now()"
            },

            ],
            })
        )
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("settings")
    }

}
