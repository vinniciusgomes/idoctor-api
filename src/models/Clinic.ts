import {
  Column,
  CreateDateColumn,
  Entity,
  IsNull,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Appointment from './Appointment';
import Expense from './Expense';
import Income from './Income';
import Patient from './Patient';
import User from './User';

@Entity('clinics')
class Clinic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  zip_code: string;

  @Column()
  address: string;

  @Column()
  neighborhood: string;

  @Column('int')
  address_number: Number;

  @Column()
  city: string;

  @Column('char', { length: 2 })
  fu: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @OneToMany(type => Appointment, appointment => appointment.clinic)
  appointments: Appointment[];

  @OneToMany(type => Expense, expense => expense.clinic)
  expenses: Expense[];

  @OneToMany(type => Income, income => income.clinic)
  incomes: Income[];

  @OneToMany(type => Patient, patient => patient.clinic)
  patients: Patient[];

  @OneToMany(type => User, user => user.clinic)
  users: User[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Clinic;
