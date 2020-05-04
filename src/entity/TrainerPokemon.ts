import { Entity, Column, ObjectIdColumn, OneToOne, JoinColumn } from "typeorm";
import { Pokemon } from "./Pokemon";

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
  // @OneToOne((type) => Pokemon)
  // @JoinColumn()
  pokemon: Pokemon;
}
