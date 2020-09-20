import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('incomes')
class Income {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  decription: string;

  @Column('decimal')
  value: Number;

  @Column('int')
  status: Number;

  @Column('date')
  deadline: Date;

  @Column('date')
  receipt_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Income;
