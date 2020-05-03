import { Entity, Column, ObjectIdColumn } from "typeorm";

@Entity()
export class TrainerPokemon {
  @ObjectIdColumn()
  id: string;
  @Column()
  trainerid: string;
  @Column()
  pokemonid: string;
  @Column()
  caughtdate: Date;
}
