import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Appointment from './Appointment';
import MedicalRecord from './MedicalRecord';

import User from './User';

@Entity('doctors')
class Doctor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  speciality: string;

  @Column('time')
  start_time: Date;

  @Column('time')
  end_time: Date;

  @Column()
  user_id: string;

  @OneToOne(type => User, user => user.doctor)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(type => Appointment, appointment => appointment.doctor)
  appointments: Appointment[];

  @OneToMany(type => MedicalRecord, medical_record => medical_record.doctor)
  medical_records: MedicalRecord[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Doctor;
