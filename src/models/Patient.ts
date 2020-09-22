import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Appointment from './Appointment';
import Clinic from './Clinic';

@Entity('patients')
class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column('date')
  date_of_birth: Date;

  @Column('char', { length: 1 })
  gender: string;

  @Column()
  skin_color: string;

  @Column()
  naturalness: string;

  @Column()
  marital_status: string;

  @Column()
  ssn: string;

  @Column()
  degree_of_instuction: string;

  @Column()
  profession: string;

  @Column()
  health_insurance: string;

  @Column()
  zip_code: string;

  @Column()
  address: string;

  @Column()
  complement: string;

  @Column('int')
  address_number: Number;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column('char', { length: 2 })
  FU: string;

  @Column('text')
  medical_record: string;

  @OneToMany(type => Appointment, appointment => appointment.patient)
  appointments: Appointment[];

  @Column()
  clinic_id: string;

  @ManyToOne(type => Clinic, clinic => clinic.patients)
  @JoinColumn({ name: 'clinic_id' })
  clinic: Clinic;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Patient;