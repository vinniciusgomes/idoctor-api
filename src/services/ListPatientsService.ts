import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Patient from '../models/Patient';

interface Request {
  page: Number;
}

class ListPatientsService {
  public async execute({ page }: Request): Promise<Patient[]> {
    const patientRepository = getRepository(Patient);

    try {
      const patients = patientRepository.find({
        select: ['id', 'name', 'avatar'],
        skip: (Number(page) - 1) * 10,
        take: 10,
        order: { name: 'ASC' },
      });

      return patients;
    } catch {
      throw new AppError('Erro on get patients list', 500);
    }
  }
}

export default ListPatientsService;
