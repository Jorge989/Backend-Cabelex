import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";

@Entity("funcionarios")
class Empolyee {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ nullable: true })
  nome: string;
  @Column({ nullable: true })
  email: string;
  @Column({ nullable: true })
  data_nascimento: Date;
  @Column({ nullable: true })
  data_admissao: Date;
  @Column({ nullable: true })
  setor: string;
  @Column({ nullable: true })
  cargo: string;

  // @ManyToOne(() => Filiais, (filial) => filial.id)
  // filial: Filiais;

  @Column({ nullable: true })
  nivel: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  update_at: Date;
}

export { Empolyee };
