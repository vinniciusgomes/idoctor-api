import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import User from './User';

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

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Income;
