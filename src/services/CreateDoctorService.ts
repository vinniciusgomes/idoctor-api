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
    const createDoctor = getRepository(Doctor);

    const doctor = createDoctor.create({
      speciality,
      start_time,
      end_time,
      user_id,
    });

    await createDoctor.save(doctor);

    return doctor;
  }
}

export default CreateDoctorService;
