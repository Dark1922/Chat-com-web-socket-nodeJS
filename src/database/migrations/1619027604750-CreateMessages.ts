import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessages1619027604750 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: "messages",
                columns:[
                    { 
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    { 
                        name: "admin_id",
                        type: "uuid",
                        isNullable: true
                    },
                    { 
                        name: "user_id",
                        type: "uuid"
                    },
                    {   name: "text", 
                        type: "varchar"
                    },
                    { 
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
            })
        )
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("messages");
    }

}
