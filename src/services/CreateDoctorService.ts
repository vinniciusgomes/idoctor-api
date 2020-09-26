import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Doctor from '../models/Doctor';

interface Request {
  speciality: string;
  start_time: string;
  end_time: string;
  user_id: string;
}

class CreateDoctorService {
  public async execute({
    speciality,
    start_time,
    end_time,
    user_id,
  }: Request): Promise<Doctor> {
    const doctorRepository = getRepository(Doctor);

    const doctor = doctorRepository.create({
      speciality,
      start_time,
      end_time,
      user_id,
    });

    try {
      await doctorRepository.save(doctor);

      return doctor;
    } catch {
      throw new AppError('Error on save doctor informations', 500);
    }
  }
}

export default CreateDoctorService;
