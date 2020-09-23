import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddTypeColumnInUsers1600824292648
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'type',
        type: 'int',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'type');
  }
}
