import { Entity, ObjectIdColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Abilities } from "./Abilities";
import { Family } from "./Family";

@Entity()
export class Pokemon {
  @ObjectIdColumn()
  id: string;
  @Column()
  number: string;
  @Column()
  name: string;
  @Column()
  species: string;
  @Column()
  types: string[];
  @Column((type) => Abilities)
  abilities: Abilities;
  @Column()
  eggGroups: string[];
  @Column()
  gender: number[];
  @Column()
  height: string;
  @Column()
  weight: string;
  @Column((type) => Family)
  family: Family;
  @Column()
  starter: boolean;
  @Column()
  legendary: boolean;
  @Column()
  mythical: boolean;
  @Column()
  ultraBeast: boolean;
  @Column()
  mega: boolean;
  @Column()
  gen: number;
}
