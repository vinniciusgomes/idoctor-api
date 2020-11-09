import { Equal, getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Patient from '../models/Patient';

interface Request {
  page: Number;
  doctor: string;
}

class ListPatientsByDoctorService {
  public async execute({ page, doctor }: Request): Promise<Patient[]> {
    const patientRepository = getRepository(Patient);

    try {
      const patientList = await patientRepository
        .createQueryBuilder('patient')
        .select(['patient.id', 'patient.name', 'patient.avatar'])
        .leftJoinAndSelect('patient.appointments', 'appointment')
        .where('appointment.doctor_id = :doctor', { doctor })
        .andWhere('appointment.status = :status', { status: 4 })
        .orWhere('appointment.type = :type', { type: 2 })
        .andWhere('appointment.status NOT IN (:canceled, :finished)', {
          canceled: 3,
          finished: 4,
        })
        .skip((Number(page) - 1) * 10)
        .take(10)
        .orderBy('patient.name', 'ASC')
        .getMany();

      return patientList;
    } catch {
      throw new AppError('Erro on get patients list', 500);
    }
  }
}

export default ListPatientsByDoctorService;
