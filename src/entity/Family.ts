import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Family {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  familyid: number;
  @Column()
  evolutionStage: number;
  @Column()
  evolutionLine: string[];
}
