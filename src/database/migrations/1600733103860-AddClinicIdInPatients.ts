import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddClinicIdInPatients1600733103860
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'patients',
      new TableColumn({
        name: 'clinic_id',
        type: 'uuid',
        isNullable: true,
      }),
    );
    await queryRunner.createForeignKey(
      'patients',
      new TableForeignKey({
        name: 'PatientClinic',
        columnNames: ['clinic_id'],
        referencedTableName: 'clinics',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('patients', 'PatientClinic');
    await queryRunner.dropColumn('patients', 'clinic_id');
  }
}
