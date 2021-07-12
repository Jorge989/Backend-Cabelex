import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("funcionarios")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  nome: string;
  @Column()
  email: string;
  @Column()
  data_nascimento: Date;
  @Column()
  data_admissao: Date;
  @Column()
  setor: string;
  @Column()
  cargo: string;
  @Column()
  nivel: string;
  @Column()
  created_at: Date;
  @Column()
  update_at: Date;
}

export default User;
