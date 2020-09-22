import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Clinic from './Clinic';
import User from './User';

@Entity('enpenses')
class Expense {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column('decimal')
  value: Number;

  @Column('int')
  status: Number;

  @Column('date')
  due_date: Date;

  @Column('date')
  payday: Date;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  clinic_id: string;

  @ManyToOne(type => Clinic, clinic => clinic.expenses)
  @JoinColumn({ name: 'clinic_id' })
  clinic: Clinic;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Expense;
