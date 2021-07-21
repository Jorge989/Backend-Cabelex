import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("funcionarios")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ nullable: true })
  nome_filial: string;
  @Column()
  total_de_funcionarios: string;

  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  update_at: Date;
}

export default User;
