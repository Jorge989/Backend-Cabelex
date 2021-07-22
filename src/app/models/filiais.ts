import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Filiais {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  qtd_employees: number;
}
