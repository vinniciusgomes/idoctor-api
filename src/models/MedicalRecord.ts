import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Doctor from './Doctor';
import Patient from './Patient';

@Entity('medical_records')
class MedicalRecord {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  patient_id: string;

  @ManyToOne(type => Patient, patient => patient.medical_records)
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @Column()
  doctor_id: string;

  @ManyToOne(type => Doctor, doctor => doctor.medical_records)
  @JoinColumn({ name: 'doctor_id' })
  doctor: Doctor;

  @Column()
  record: string;

  @Column()
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default MedicalRecord;
