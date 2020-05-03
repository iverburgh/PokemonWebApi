import { Entity, Column, ObjectIdColumn } from "typeorm";

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
}
