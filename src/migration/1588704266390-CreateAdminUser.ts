import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { Trainer } from "../entity/Trainer";

export class CreateAdminUser1588704266390 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let user = new Trainer();
    user.username = "admin";
    user.password = "admin";
    user.hashPassword();
    user.role = "ADMIN";
    const userRepository = getRepository(Trainer);
    await userRepository.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
