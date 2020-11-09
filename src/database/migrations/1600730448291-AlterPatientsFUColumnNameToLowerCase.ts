import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AlterPatientsFUColumnNameToLowerCase1600730448291
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('patients', 'FU', 'fu');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('patients', 'fu', 'FU');
  }
}
