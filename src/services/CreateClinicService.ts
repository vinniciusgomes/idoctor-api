import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Clinic from '../models/Clinic';

interface Request {
  name: string;
  zip_code: string;
  address: string;
  neighborhood: string;
  address_number: Number;
  city: string;
  fu: string;
  phone: string;
  email: string;
}

class CreateClinicService {
  public async execute({
    name,
    zip_code,
    address,
    neighborhood,
    address_number,
    city,
    fu,
    phone,
    email,
  }: Request): Promise<Clinic> {
    const clinicRepository = getRepository(Clinic);

    const clinic = clinicRepository.create({
      name,
      zip_code,
      address,
      neighborhood,
      address_number,
      city,
      fu,
      phone,
      email,
    });

    try {
      await clinicRepository.save(clinic);

      return clinic;
    } catch {
      throw new AppError('Error on save the clinic', 500);
    }
  }
}

export default CreateClinicService;
