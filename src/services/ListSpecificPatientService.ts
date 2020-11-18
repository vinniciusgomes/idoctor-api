import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Patient from '../models/Patient';

interface Request {
  id: string;
}

class ListSpecificPatientService {
  public async execute({ id }: Request): Promise<Patient | undefined> {
    const patientRepository = getRepository(Patient);

    try {
      const patient = await patientRepository.findOne(id);

      if (patient) {
        return patient;
      }
    } catch {
      throw new AppError('Erro on get patients list', 500);
    }
  }
}

export default ListSpecificPatientService;
