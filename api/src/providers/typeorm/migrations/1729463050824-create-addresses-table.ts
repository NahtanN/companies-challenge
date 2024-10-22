import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAddressesTable1689784567890 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'addresses',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'zipcode',
            type: 'varchar',
            length: '10',
            isNullable: true,
          },
          {
            name: 'state',
            type: 'varchar',
            length: '2',
            isNullable: false,
          },
          {
            name: 'city',
            type: 'varchar',
            length: '200',
            isNullable: false,
          },
          {
            name: 'neighborhood',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'street',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'number',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'complement',
            type: 'varchar',
            length: '100',
            isNullable: true,
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('addresses');
  }
}
