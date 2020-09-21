import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterDoctorsEndTimeType1600727781140
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'doctors',
      'end_time',
      new TableColumn({
        name: 'end_time',
        type: 'time',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'doctors',
      'end_time',
      new TableColumn({
        name: 'end_time',
        type: 'varchar',
      }),
    );
  }
}
