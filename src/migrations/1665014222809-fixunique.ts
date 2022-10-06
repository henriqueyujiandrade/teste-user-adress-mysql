import { MigrationInterface, QueryRunner } from "typeorm";

export class fixunique1665014222809 implements MigrationInterface {
    name = 'fixunique1665014222809'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_e09f3f89a24fd67ff41fdddad0\` ON \`users\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`)`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD UNIQUE INDEX \`IDX_230b925048540454c8b4c481e1\` (\`cpf\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP INDEX \`IDX_230b925048540454c8b4c481e1\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_e09f3f89a24fd67ff41fdddad0\` ON \`users\` (\`email\`, \`cpf\`)`);
    }

}
