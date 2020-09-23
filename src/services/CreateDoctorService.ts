import { getRepository } from 'typeorm';

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

    await doctorRepository.save(doctor);

    return doctor;
  }
}

export default CreateDoctorService;
