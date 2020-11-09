import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterDoctorsStartTimeType1600727605374
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'doctors',
      'start_time',
      new TableColumn({
        name: 'start_time',
        type: 'time',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'doctors',
      'start_time',
      new TableColumn({
        name: 'start_time',
        type: 'varchar',
      }),
    );
  }
}
