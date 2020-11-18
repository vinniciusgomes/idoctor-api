import { Equal, getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Patient from '../models/Patient';

interface Request {
  page: Number;
}

class ListPatientsService {
  public async execute({ page }: Request): Promise<Patient[]> {
    const patientRepository = getRepository(Patient);

    try {
      const patientList = await patientRepository
        .createQueryBuilder('patient')
        .select([
          'patient.id',
          'patient.name',
          'patient.avatar',
          'patient_appointments.id',
          'patient_appointments.type',
          'patient_appointments.status',
          'patient_appointments.date',
        ])
        .leftJoin(
          'patient.appointments',
          'patient_appointments',
          'patient_appointments.status  = :status',
          {
            status: 4,
          },
        )
        .where('patient_appointments.status = :status', { status: 4 })
        .orWhere('patient_appointments.type = :type', { type: 2 })
        .andWhere('patient_appointments.status NOT IN (:canceled, :finished)', {
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

export default ListPatientsService;
