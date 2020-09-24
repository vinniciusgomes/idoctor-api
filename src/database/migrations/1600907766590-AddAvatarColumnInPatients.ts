import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddAvatarColumnInPatients1600907766590
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'patients',
      new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('patients', 'avatar');
  }
}
