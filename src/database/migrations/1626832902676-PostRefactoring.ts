import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class PostRefactoring1626832902676 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "filiais",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "nome_filial",
            type: "varchar(255)",
            isUnique: true,
            default: false,
          },
          {
            name: "total_de_funcionarios",

            type: "int",
          },
          {
            name: "filiais_funcionarios_id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ["filiais_funcionarios_id"],
            name: "filiais_funcionarios_id",
            referencedTableName: "funcionarios",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("filiais");
  }
}
