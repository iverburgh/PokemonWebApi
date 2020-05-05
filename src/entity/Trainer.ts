import { Entity, Column, ObjectIdColumn, OneToMany } from "typeorm";
import { TrainerPokemon } from "./TrainerPokemon";

@Entity()
export class Trainer {
  @ObjectIdColumn()
  id: string;
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
  startdate: Date;
  @Column((type) => TrainerPokemon)
  trainerpokemons: TrainerPokemon[];
}
