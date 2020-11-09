import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Patient from '../models/Patient';

interface Request {
  name: string;
  email: string;
  phone: string;
  date_of_birth: Date;
  gender: string;
  skin_color: string;
  naturalness: string;
  marital_status: string;
  ssn: string;
  degree_of_instuction: string;
  profession: string;
  health_insurance: string;
  zip_code: string;
  address: string;
  complement: string;
  address_number: Number;
  neighborhood: string;
  city: string;
  fu: string;
  clinic_id: string;
}

class CreatePatientService {
  public async execute({
    name,
    email,
    phone,
    date_of_birth,
    gender,
    skin_color,
    naturalness,
    marital_status,
    ssn,
    degree_of_instuction,
    profession,
    health_insurance,
    zip_code,
    address,
    complement,
    address_number,
    neighborhood,
    city,
    fu,
    clinic_id,
  }: Request): Promise<Patient> {
    const patientRepository = getRepository(Patient);

    const patientExist = await patientRepository.findOne({ ssn });

    if (patientExist) {
      throw new AppError('Patient already registered', 400);
    }

    const patient = patientRepository.create({
      name,
      email,
      phone,
      date_of_birth,
      gender,
      skin_color,
      naturalness,
      marital_status,
      ssn,
      degree_of_instuction,
      profession,
      health_insurance,
      zip_code,
      address,
      complement,
      address_number,
      neighborhood,
      city,
      fu,
      clinic_id,
    });

    try {
      await patientRepository.save(patient);

      return patient;
    } catch {
      throw new AppError('Error on save Patient', 500);
    }
  }
}

export default CreatePatientService;
