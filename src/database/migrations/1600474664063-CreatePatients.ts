import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreatePatients1600474664063 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'patients',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'phone',
            type: 'varchar',
          },
          {
            name: 'date_of_birth',
            type: 'date',
          },
          {
            name: 'gender',
            type: 'char',
            length: '1',
          },
          {
            name: 'skin_color',
            type: 'varchar',
          },
          {
            name: 'naturalness',
            type: 'varchar',
          },
          {
            name: 'marital_status',
            type: 'varchar',
          },
          {
            name: 'ssn',
            type: 'varchar',
          },
          {
            name: 'degree_of_instuction',
            type: 'varchar',
          },
          {
            name: 'profession',
            type: 'varchar',
          },
          {
            name: 'health_insurance',
            type: 'varchar',
          },
          {
            name: 'zip_code',
            type: 'varchar',
          },
          {
            name: 'address',
            type: 'varchar',
          },
          {
            name: 'complement',
            type: 'varchar',
          },
          {
            name: 'address_number',
            type: 'int',
          },
          {
            name: 'neighborhood',
            type: 'varchar',
          },
          {
            name: 'city',
            type: 'varchar',
          },
          {
            name: 'FU',
            type: 'char',
            length: '2',
          },
          {
            name: 'medical_record',
            type: 'text',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('patients');
  }
}
