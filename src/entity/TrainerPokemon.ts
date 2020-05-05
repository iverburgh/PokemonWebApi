import { Entity, Column, ObjectIdColumn, OneToOne, JoinColumn } from "typeorm";
import { Pokemon } from "./Pokemon";

@Entity()
export class TrainerPokemon {
  @ObjectIdColumn()
  id: string;
  @Column()
  pokemonname: string;
  @Column()
  pokemonnumber: number;
  @Column()
  caughtdate: Date;
}
