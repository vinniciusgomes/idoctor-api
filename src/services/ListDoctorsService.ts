import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Doctor from '../models/Doctor';
import User from '../models/User';

class ListDoctorsService {
  public async execute(): Promise<Doctor[]> {
    const doctorRepository = getRepository(Doctor);

    try {
      const doctorList = await doctorRepository
        .createQueryBuilder('doctor')
        .select([
          'doctor.id',
          'doctor.speciality',
          'doctor.start_time',
          'doctor.end_time',
          'user.name',
        ])
        .leftJoin('doctor.user', 'user')
        .getMany();

      return doctorList;
    } catch {
      throw new AppError('Error on get doctor list', 500);
    }
  }
}

export default ListDoctorsService;
