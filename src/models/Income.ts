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

  @Column()
  clinic_id: string;

  @ManyToOne(type => Clinic, clinic => clinic.incomes)
  @JoinColumn({ name: 'clinic_id' })
  clinic: Clinic;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Income;
