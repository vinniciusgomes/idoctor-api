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
import Doctor from './Doctor';
import Patient from './Patient';

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('date')
  date: Date;

  @Column('time')
  start_time: Date;

  @Column('int')
  status: Number;

  @Column('int')
  type: Number;

  @Column()
  doctor_id: string;

  @ManyToOne(type => Doctor, doctor => doctor.appointments)
  @JoinColumn({ name: 'doctor_id' })
  doctor: Doctor;

  @Column()
  patient_id: string;

  @ManyToOne(type => Patient, patient => patient.appointments)
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @Column()
  clinic_id: string;

  @ManyToOne(type => Clinic, clinic => clinic.appointments)
  @JoinColumn({ name: 'clinic_id' })
  clinic: Clinic;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Appointment;
