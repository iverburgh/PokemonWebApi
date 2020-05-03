import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { PokemonDatabaseSeed } from "../seeds/pokemondatabase.seed";

export class PokemonDatabase1588528925457 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await getRepository("pokemon").save(PokemonDatabaseSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
