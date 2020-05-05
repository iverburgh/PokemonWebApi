import {
  Entity,
  Column,
  ObjectIdColumn,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { TrainerPokemon } from "./TrainerPokemon";
import { Length, IsNotEmpty } from "class-validator";
import * as bcrypt from "bcryptjs";

@Entity()
@Unique(["username"])
export class Trainer {
  @ObjectIdColumn()
  id: string;
  @Column()
  @Length(4, 20)
  username: string;
  @Column()
  @Length(4, 100)
  password: string;
  @Column()
  @IsNotEmpty()
  role: string;
  @Column()
  name: string;
  @Column()
  team: string;
  @Column()
  level: number;
  @Column()
  distancewalked: number;
  @Column()
  pokemoncaught: number;
  @Column()
  pokestopsvisited: number;
  @Column()
  totalxp: number;
  @Column()
  @CreateDateColumn()
  startdate: Date;
  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
  @Column((type) => TrainerPokemon)
  trainerpokemons: TrainerPokemon[];

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
