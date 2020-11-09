import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class SetMedicalRecordColumnNullable1600905663387
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'patients',
      'medical_record',
      new TableColumn({
        name: 'medical_record',
        type: 'text',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'patients',
      'medical_record',
      new TableColumn({
        name: 'medical_record',
        type: 'text',
      }),
    );
  }
}
