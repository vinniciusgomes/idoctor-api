import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Clinic from './Clinic';
import Doctor from './Doctor';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @Column()
  clinic_id: string;

  @ManyToOne(type => Clinic, clinic => clinic.patients)
  @JoinColumn({ name: 'clinic_id' })
  clinic: Clinic;

  @OneToOne(type => Doctor, doctor => doctor.user)
  doctor: Doctor;

  @Column('int')
  type: Number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
