import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterAppointmentsStartTimeType1600727015047
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'appointments',
      'start_time',
      new TableColumn({
        name: 'start_time',
        type: 'time',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'appointments',
      'start_time',
      new TableColumn({
        name: 'start_time',
        type: 'varchar',
      }),
    );
  }
}
