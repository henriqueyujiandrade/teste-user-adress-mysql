import { MigrationInterface, QueryRunner } from "typeorm";

export class createuseradress1665012902135 implements MigrationInterface {
    name = 'createuseradress1665012902135'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`sobrenome\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`telefone\` varchar(255) NOT NULL, \`cpf\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_e09f3f89a24fd67ff41fdddad0\` (\`email\`, \`cpf\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`address\` (\`id\` int NOT NULL AUTO_INCREMENT, \`logradouro\` varchar(255) NOT NULL, \`numero\` varchar(255) NOT NULL, \`cidade\` varchar(255) NOT NULL, \`uf\` varchar(255) NOT NULL, \`cep\` varchar(255) NOT NULL, \`bairro\` varchar(255) NOT NULL, \`complemento\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`address\` ADD CONSTRAINT \`FK_d25f1ea79e282cc8a42bd616aa3\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`address\` DROP FOREIGN KEY \`FK_d25f1ea79e282cc8a42bd616aa3\``);
        await queryRunner.query(`DROP TABLE \`address\``);
        await queryRunner.query(`DROP INDEX \`IDX_e09f3f89a24fd67ff41fdddad0\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
