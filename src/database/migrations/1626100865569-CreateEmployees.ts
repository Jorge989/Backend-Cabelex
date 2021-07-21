import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEmployees1626100865569 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "funcionarios",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "nome",
            type: "varchar",
            isUnique: false,
            default: false,
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "data_nascimento",
            type: "date",
          },
          {
            name: "data_admissao",
            type: "date",
          },
          {
            name: "setor",
            type: "varchar",
            isUnique: false,
          },
          {
            name: "cargo",
            type: "varchar",
            isUnique: false,
          },
          {
            name: "nome_filial",
            type: "varchar",
            isUnique: false,
          },
          {
            name: "nivel",
            type: "varchar",
            isUnique: false,
          },
          {
            name: "created_at",
            type: "timestamp",

            default: "now()",
          },
          {
            name: "update_at",
            type: "timestamp",

            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("funcionarios");
  }
}
