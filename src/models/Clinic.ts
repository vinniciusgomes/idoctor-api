import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Clinic;
