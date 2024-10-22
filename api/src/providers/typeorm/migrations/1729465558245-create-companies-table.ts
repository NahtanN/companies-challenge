import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateCompaniesTable1689784567891 implements MigrationInterface {
  addressFk: TableForeignKey;

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'companies',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'phone',
            type: 'varchar',
            length: '12',
            isNullable: false,
          },
          {
            name: 'cnpj',
            type: 'varchar',
            length: '14',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'address_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'TIMESTAMP',
            default: 'NOW()',
          },
          {
            name: 'updated_at',
            type: 'TIMESTAMP',
            default: 'NOW() ON UPDATE CURRENT_TIMESTAMP()',
          },
          {
            name: 'deleted_at',
            type: 'TIMESTAMP',
            isNullable: true,
          },
        ],
      }),
    );

    this.addressFk = new TableForeignKey({
      name: 'FK_CompanyAddress',
      columnNames: ['address_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'addresses',
      onDelete: 'CASCADE',
    });

    await queryRunner.createForeignKey('companies', this.addressFk);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('companies', this.addressFk);
    await queryRunner.dropTable('companies');
  }
}
