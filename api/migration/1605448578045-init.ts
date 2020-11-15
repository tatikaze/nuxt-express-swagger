import {MigrationInterface, QueryRunner} from "typeorm";

export class init1605448578045 implements MigrationInterface {
    name = 'init1605448578045'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `name`");
        await queryRunner.query("ALTER TABLE `user` ADD `name` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `name`");
        await queryRunner.query("ALTER TABLE `user` ADD `name` double NOT NULL");
    }

}
